/**
 * AEMO Gas Bulletin Board (GBB) Data Integration
 *
 * Fetches live pipeline flow data from AEMO's public Gas Bulletin Board API.
 * The GBB provides near-real-time gas flow, capacity, and nomination data
 * for major east-coast Australian gas pipelines.
 *
 * API Docs: https://gbbapi.aemo.com.au
 */

const AEMO = (() => {
    const GBB_BASE_URL = 'https://gbbapi.aemo.com.au/api/v1';
    const NEMWEB_BASE_URL = 'https://nemweb.com.au';

    // Cache for API responses (5 minute TTL)
    const cache = new Map();
    const CACHE_TTL = 5 * 60 * 1000;

    function getCached(key) {
        const entry = cache.get(key);
        if (entry && (Date.now() - entry.timestamp) < CACHE_TTL) {
            return entry.data;
        }
        cache.delete(key);
        return null;
    }

    function setCache(key, data) {
        cache.set(key, { data, timestamp: Date.now() });
    }

    /**
     * Fetch with timeout, CORS proxy fallback, and caching
     */
    async function fetchWithFallback(url, cacheKey) {
        const cached = getCached(cacheKey);
        if (cached) return cached;

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);

        try {
            // Try direct fetch first
            const response = await fetch(url, {
                signal: controller.signal,
                headers: { 'Accept': 'application/json' }
            });
            clearTimeout(timeout);

            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            setCache(cacheKey, data);
            return data;
        } catch (directError) {
            clearTimeout(timeout);

            // Try via CORS proxy as fallback
            const proxyUrls = [
                `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
                `https://corsproxy.io/?${encodeURIComponent(url)}`
            ];

            for (const proxyUrl of proxyUrls) {
                try {
                    const proxyController = new AbortController();
                    const proxyTimeout = setTimeout(() => proxyController.abort(), 10000);
                    const response = await fetch(proxyUrl, {
                        signal: proxyController.signal
                    });
                    clearTimeout(proxyTimeout);

                    if (!response.ok) continue;
                    const data = await response.json();
                    setCache(cacheKey, data);
                    return data;
                } catch {
                    continue;
                }
            }

            console.warn(`AEMO API unavailable for ${cacheKey}, using fallback data`);
            return null;
        }
    }

    /**
     * Get current gas day pipeline flow data from the GBB
     */
    async function getPipelineFlows() {
        const today = new Date().toISOString().split('T')[0];
        const url = `${GBB_BASE_URL}/pipeline/flows?gasDate=${today}`;
        return await fetchWithFallback(url, `flows-${today}`);
    }

    /**
     * Get pipeline nameplate capacity data
     */
    async function getPipelineCapacity() {
        const url = `${GBB_BASE_URL}/pipeline/capacity`;
        return await fetchWithFallback(url, 'capacity');
    }

    /**
     * Get gas bulletin board pipeline list
     */
    async function getPipelineList() {
        const url = `${GBB_BASE_URL}/pipeline/list`;
        return await fetchWithFallback(url, 'pipeline-list');
    }

    /**
     * Get current gas day nominations
     */
    async function getNominations() {
        const today = new Date().toISOString().split('T')[0];
        const url = `${GBB_BASE_URL}/pipeline/nominations?gasDate=${today}`;
        return await fetchWithFallback(url, `nominations-${today}`);
    }

    /**
     * Generate realistic fallback data when API is unavailable.
     * Based on typical operational ranges for each pipeline.
     */
    function generateFallbackData() {
        const now = new Date();
        const gasDay = now.toISOString().split('T')[0];
        const hour = now.getHours();

        // Seasonal factor: higher demand in winter (Jun-Aug)
        const month = now.getMonth();
        const seasonalFactor = (month >= 4 && month <= 8) ? 1.2 :
                               (month >= 9 && month <= 10) ? 1.0 : 0.85;

        // Time-of-day factor: higher in morning/evening
        const todFactor = (hour >= 6 && hour <= 9) ? 1.15 :
                          (hour >= 17 && hour <= 21) ? 1.1 : 0.95;

        const baseFactor = seasonalFactor * todFactor;

        const pipelines = {
            'MSP': {
                name: 'Moomba to Sydney Pipeline',
                capacity: 446,
                baseFlow: 310,
                variance: 40
            },
            'EGP': {
                name: 'Eastern Gas Pipeline',
                capacity: 289,
                baseFlow: 195,
                variance: 30
            },
            'SWQP': {
                name: 'South West Queensland Pipeline',
                capacity: 385,
                baseFlow: 260,
                variance: 35
            },
            'RBP': {
                name: 'Roma to Brisbane Pipeline',
                capacity: 210,
                baseFlow: 155,
                variance: 25
            },
            'VTS': {
                name: 'Victorian Transmission System',
                capacity: 1100,
                baseFlow: 720,
                variance: 100
            },
            'MAPS': {
                name: 'Moomba to Adelaide Pipeline',
                capacity: 252,
                baseFlow: 170,
                variance: 30
            },
            'SEAGAS': {
                name: 'SEA Gas Pipeline',
                capacity: 314,
                baseFlow: 180,
                variance: 35
            },
            'TGP': {
                name: 'Tasmanian Gas Pipeline',
                capacity: 129,
                baseFlow: 72,
                variance: 15
            },
            'QGP': {
                name: 'Queensland Gas Pipeline',
                capacity: 142,
                baseFlow: 90,
                variance: 20
            },
            'CGP': {
                name: 'Carpentaria Gas Pipeline',
                capacity: 119,
                baseFlow: 78,
                variance: 15
            },
            'NGP': {
                name: 'Northern Gas Pipeline',
                capacity: 90,
                baseFlow: 55,
                variance: 12
            },
            'DDPS': {
                name: 'Darling Downs Pipeline',
                capacity: 300,
                baseFlow: 200,
                variance: 30
            }
        };

        const flows = {};
        for (const [id, pipeline] of Object.entries(pipelines)) {
            // Add some pseudo-random variation based on pipeline ID and time
            const hash = id.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
            const variation = Math.sin(hash + hour * 0.5) * pipeline.variance;
            const flow = Math.round(Math.min(
                pipeline.capacity,
                Math.max(0, pipeline.baseFlow * baseFactor + variation)
            ));
            const utilisation = Math.round((flow / pipeline.capacity) * 100);

            flows[id] = {
                pipelineId: id,
                pipelineName: pipeline.name,
                gasDate: gasDay,
                currentFlow_TJ: flow,
                capacity_TJ: pipeline.capacity,
                utilisation_pct: utilisation,
                flowDirection: 'Forward',
                lastUpdated: now.toISOString(),
                dataSource: 'Simulated (AEMO API unavailable)'
            };
        }

        return flows;
    }

    /**
     * Get combined pipeline status data (live or fallback)
     * Returns a map of pipeline GBB IDs to their current status
     */
    async function getPipelineStatus() {
        try {
            const [flowData, capacityData] = await Promise.all([
                getPipelineFlows(),
                getPipelineCapacity()
            ]);

            if (flowData && capacityData) {
                // Process live AEMO data
                const status = {};
                if (Array.isArray(flowData)) {
                    flowData.forEach(flow => {
                        const id = flow.pipelineId || flow.PipelineId;
                        if (id) {
                            const cap = capacityData.find?.(c =>
                                (c.pipelineId || c.PipelineId) === id
                            );
                            status[id] = {
                                pipelineId: id,
                                pipelineName: flow.pipelineName || flow.PipelineName,
                                gasDate: flow.gasDate || flow.GasDate,
                                currentFlow_TJ: flow.actualFlow || flow.ActualFlow || 0,
                                capacity_TJ: cap?.capacity || cap?.Capacity || 0,
                                utilisation_pct: cap?.capacity ?
                                    Math.round(((flow.actualFlow || 0) / cap.capacity) * 100) : 0,
                                flowDirection: flow.flowDirection || flow.FlowDirection || 'Forward',
                                lastUpdated: new Date().toISOString(),
                                dataSource: 'AEMO Gas Bulletin Board (Live)'
                            };
                        }
                    });
                }

                if (Object.keys(status).length > 0) return status;
            }
        } catch (err) {
            console.warn('Error processing AEMO data:', err);
        }

        // Return fallback data
        return generateFallbackData();
    }

    /**
     * Get utilisation color for a pipeline based on current flow vs capacity
     */
    function getUtilisationColor(utilisationPct) {
        if (utilisationPct >= 90) return '#dc2626'; // Red - near capacity
        if (utilisationPct >= 75) return '#f59e0b'; // Amber - high use
        if (utilisationPct >= 50) return '#3b82f6'; // Blue - moderate
        if (utilisationPct > 0)  return '#22c55e';  // Green - low use
        return '#6b7280'; // Grey - no flow / unknown
    }

    /**
     * Format flow data as HTML for popup display
     */
    function formatFlowHTML(flowData) {
        if (!flowData) return '<em>No live flow data available</em>';

        const color = getUtilisationColor(flowData.utilisation_pct);
        const barWidth = Math.min(100, flowData.utilisation_pct);

        return `
            <div class="aemo-flow-data">
                <div class="flow-header">
                    <span class="flow-label">Current Flow</span>
                    <span class="flow-value">${flowData.currentFlow_TJ} TJ/day</span>
                </div>
                <div class="flow-header">
                    <span class="flow-label">Capacity</span>
                    <span class="flow-value">${flowData.capacity_TJ} TJ/day</span>
                </div>
                <div class="utilisation-bar-container">
                    <div class="utilisation-bar" style="width: ${barWidth}%; background: ${color};"></div>
                </div>
                <div class="flow-header">
                    <span class="flow-label">Utilisation</span>
                    <span class="flow-value" style="color: ${color}; font-weight: 700;">${flowData.utilisation_pct}%</span>
                </div>
                <div class="flow-header">
                    <span class="flow-label">Direction</span>
                    <span class="flow-value">${flowData.flowDirection}</span>
                </div>
                <div class="flow-source">
                    ${flowData.dataSource}<br>
                    Gas Day: ${flowData.gasDate}
                </div>
            </div>
        `;
    }

    return {
        getPipelineFlows,
        getPipelineCapacity,
        getPipelineList,
        getNominations,
        getPipelineStatus,
        getUtilisationColor,
        formatFlowHTML,
        generateFallbackData
    };
})();
