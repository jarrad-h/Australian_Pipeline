/**
 * Australian Oil & Gas Pipeline Interactive Map
 * Main Application Module
 */

(function () {
    'use strict';

    // ── State ──────────────────────────────────────────────
    let map;
    let pipelineLayer;
    let hubLayer;
    let facilityLayer;
    let pipelineData = null;
    let aemoStatus = {};
    let activeFilters = {
        type: new Set(['Gas', 'Oil']),
        state: new Set(),
        operator: new Set(),
        status: new Set(['Operating', 'Under Development'])
    };
    let searchTerm = '';
    let highlightedPipeline = null;

    // ── Color scheme ───────────────────────────────────────
    const typeColors = {
        'Gas': '#3b82f6',
        'Oil': '#ef4444',
        'Gas/Oil': '#8b5cf6'
    };

    function getPipelineColor(properties) {
        const commodity = (properties.commodity || '').toLowerCase();
        if (commodity.includes('ethane')) return '#06b6d4';
        if (commodity.includes('csg') || commodity.includes('coal seam')) return '#8b5cf6';
        if (commodity.includes('condensate') || commodity.includes('lpg') || commodity.includes('crude')) return '#ef4444';
        if (properties.type === 'Oil') return '#ef4444';
        return '#3b82f6';
    }

    function getStatusDash(status) {
        if (status === 'Under Development' || status === 'Proposed') return '8 6';
        if (status === 'Decommissioned') return '3 6';
        return null;
    }

    // ── Hub & Facility Data ────────────────────────────────
    const hubs = [
        { name: 'Moomba Gas Hub', lat: -28.10, lng: 140.20, type: 'hub', description: 'Major gas processing and pipeline junction in Cooper Basin' },
        { name: 'Wallumbilla Gas Hub', lat: -26.40, lng: 149.10, type: 'hub', description: 'Key Queensland gas trading hub connecting Surat/Bowen basins' },
        { name: 'Longford Gas Plant', lat: -38.15, lng: 147.07, type: 'processing', description: 'Major gas processing plant for Bass Strait production' },
        { name: 'Ballera Gas Plant', lat: -27.40, lng: 141.80, type: 'processing', description: 'Gas processing hub connecting SW Queensland pipeline network' },
        { name: 'Karratha / NWS LNG', lat: -20.66, lng: 116.68, type: 'lng', description: 'North West Shelf LNG export facility, one of the world\'s largest' },
        { name: 'Darwin LNG', lat: -12.46, lng: 130.84, type: 'lng', description: 'LNG export terminal processing Bayu-Undan and Ichthys gas' },
        { name: 'Gladstone LNG Hub', lat: -23.85, lng: 151.27, type: 'lng', description: 'Three-train LNG export hub (GLNG, APLNG, QCLNG) on Curtis Island' },
        { name: 'Iona Gas Storage', lat: -38.60, lng: 142.90, type: 'storage', description: 'Underground gas storage facility in Port Campbell, Victoria' },
        { name: 'Port Bonython', lat: -33.18, lng: 137.78, type: 'terminal', description: 'Liquids export terminal for Cooper Basin condensate and LPG' },
        { name: 'Wheatstone LNG', lat: -21.58, lng: 115.57, type: 'lng', description: 'Chevron LNG facility near Onslow processing Wheatstone/Iago gas' },
        { name: 'Barrow Island (Gorgon)', lat: -20.80, lng: 115.40, type: 'lng', description: 'Chevron Gorgon LNG project, one of Australia\'s largest resource projects' }
    ];

    const hubColors = {
        'hub': '#f59e0b',
        'processing': '#22c55e',
        'lng': '#ec4899',
        'storage': '#8b5cf6',
        'terminal': '#f97316'
    };

    // ── Initialise Map ─────────────────────────────────────
    function initMap() {
        map = L.map('map', {
            center: [-25.5, 134.5],
            zoom: 5,
            minZoom: 4,
            maxZoom: 12,
            zoomControl: true,
            attributionControl: true
        });

        // Dark tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a> | Pipeline data sourced from public records | AEMO GBB',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        // Layer groups
        pipelineLayer = L.layerGroup().addTo(map);
        hubLayer = L.layerGroup().addTo(map);
        facilityLayer = L.layerGroup().addTo(map);
    }

    // ── Load Pipeline Data ─────────────────────────────────
    async function loadPipelineData() {
        try {
            const response = await fetch('data/pipelines.geojson');
            pipelineData = await response.json();
            return pipelineData;
        } catch (err) {
            console.error('Failed to load pipeline data:', err);
            return null;
        }
    }

    // ── Render Pipelines ───────────────────────────────────
    function renderPipelines() {
        pipelineLayer.clearLayers();

        if (!pipelineData) return;

        const filtered = pipelineData.features.filter(f => matchesFilters(f.properties));

        filtered.forEach(feature => {
            const props = feature.properties;
            const color = getPipelineColor(props);
            const dashArray = getStatusDash(props.status);
            const gbbId = props.gbb_pipeline_id;
            const flowData = gbbId ? aemoStatus[gbbId] : null;

            // Determine weight based on capacity
            let weight = 3;
            if (props.capacity_tj_day) {
                if (props.capacity_tj_day >= 1000) weight = 5;
                else if (props.capacity_tj_day >= 500) weight = 4;
                else if (props.capacity_tj_day >= 200) weight = 3;
                else weight = 2.5;
            }

            // If we have AEMO flow data, color by utilisation
            let lineColor = color;
            let lineOpacity = 0.85;
            if (flowData) {
                lineColor = AEMO.getUtilisationColor(flowData.utilisation_pct);
                lineOpacity = 0.9;
            }

            const line = L.geoJSON(feature, {
                style: {
                    color: lineColor,
                    weight: weight,
                    opacity: lineOpacity,
                    dashArray: dashArray,
                    lineCap: 'round',
                    lineJoin: 'round'
                },
                onEachFeature: (feat, layer) => {
                    // Tooltip on hover
                    const tooltipContent = buildTooltip(props, flowData);
                    layer.bindTooltip(tooltipContent, {
                        className: 'pipeline-tooltip',
                        sticky: true,
                        direction: 'top',
                        offset: [0, -10]
                    });

                    // Popup on click
                    const popupContent = buildPopup(props, flowData);
                    layer.bindPopup(popupContent, {
                        maxWidth: 340,
                        minWidth: 280
                    });

                    // Hover highlight effect
                    layer.on('mouseover', function () {
                        this.setStyle({ weight: weight + 2, opacity: 1 });
                        this.bringToFront();
                    });
                    layer.on('mouseout', function () {
                        this.setStyle({ weight: weight, opacity: lineOpacity });
                    });
                }
            });

            line.pipelineName = props.name;
            line.addTo(pipelineLayer);
        });

        updatePipelineList(filtered);
        updateStats(filtered);
    }

    // ── Build Tooltip ──────────────────────────────────────
    function buildTooltip(props, flowData) {
        let html = `<div class="tooltip-name">${props.name}</div>`;
        html += `<div class="tooltip-meta">${props.operator} | ${props.type} | ${props.length_km} km</div>`;

        if (flowData) {
            const color = AEMO.getUtilisationColor(flowData.utilisation_pct);
            html += `<div class="tooltip-flow">`;
            html += `Flow: <strong>${flowData.currentFlow_TJ} TJ/day</strong> `;
            html += `(<span style="color:${color};font-weight:700">${flowData.utilisation_pct}%</span> utilisation)`;
            html += `</div>`;
        }

        return html;
    }

    // ── Build Popup ────────────────────────────────────────
    function buildPopup(props, flowData) {
        const typeColor = getPipelineColor(props);

        let html = `<div class="popup-content">`;
        html += `<div class="popup-header" style="border-left: 4px solid ${typeColor}">`;
        html += `<h3>${props.name}</h3>`;
        html += `<div class="popup-operator">${props.operator}</div>`;
        html += `</div>`;
        html += `<div class="popup-body">`;
        html += `<div class="popup-detail-grid">`;
        html += buildDetail('Type', props.commodity || props.type);
        html += buildDetail('State', props.state);
        html += buildDetail('Length', props.length_km ? `${props.length_km.toLocaleString()} km` : 'N/A');
        html += buildDetail('Diameter', props.diameter_mm ? `${props.diameter_mm} mm` : 'N/A');
        html += buildDetail('Status', props.status);
        html += buildDetail('Commissioned', props.year_commissioned || 'N/A');
        if (props.capacity_tj_day) {
            html += buildDetail('Capacity', `${props.capacity_tj_day} TJ/day`);
        }
        html += `</div>`;

        if (props.description) {
            html += `<div class="popup-divider"></div>`;
            html += `<div style="font-size:12px;color:var(--text-secondary);line-height:1.5">${props.description}</div>`;
        }

        if (flowData) {
            html += `<div class="popup-divider"></div>`;
            html += `<div class="aemo-section-title">AEMO Live Data</div>`;
            html += AEMO.formatFlowHTML(flowData);
        }

        html += `</div></div>`;
        return html;
    }

    function buildDetail(label, value) {
        return `<div class="popup-detail"><span class="detail-label">${label}</span><span class="detail-value">${value}</span></div>`;
    }

    // ── Render Hubs & Facilities ───────────────────────────
    function renderHubs() {
        hubLayer.clearLayers();

        hubs.forEach(hub => {
            const color = hubColors[hub.type] || '#f59e0b';
            const icon = L.divIcon({
                className: '',
                html: `<div class="hub-marker" style="background:${color}" title="${hub.name}"></div>`,
                iconSize: [22, 22],
                iconAnchor: [11, 11]
            });

            const marker = L.marker([hub.lat, hub.lng], { icon }).addTo(hubLayer);

            const label = hub.type.charAt(0).toUpperCase() + hub.type.slice(1);
            marker.bindTooltip(`<div class="tooltip-name">${hub.name}</div><div class="tooltip-meta">${label}</div>`, {
                className: 'pipeline-tooltip',
                direction: 'top',
                offset: [0, -14]
            });

            marker.bindPopup(`
                <div class="popup-content">
                    <div class="popup-header" style="border-left: 4px solid ${color}">
                        <h3>${hub.name}</h3>
                        <div class="popup-operator">${label} Facility</div>
                    </div>
                    <div class="popup-body">
                        <div style="font-size:12px;color:var(--text-secondary);line-height:1.5">${hub.description}</div>
                    </div>
                </div>
            `, { maxWidth: 300, minWidth: 240 });
        });
    }

    // ── Filters ────────────────────────────────────────────
    function matchesFilters(props) {
        // Search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            const searchable = `${props.name} ${props.operator} ${props.state} ${props.commodity || ''} ${props.description || ''}`.toLowerCase();
            if (!searchable.includes(term)) return false;
        }

        // Type filter
        if (activeFilters.type.size > 0 && !activeFilters.type.has(props.type)) return false;

        // State filter
        if (activeFilters.state.size > 0) {
            const states = (props.state || '').split('/');
            if (!states.some(s => activeFilters.state.has(s.trim()))) return false;
        }

        // Operator filter
        if (activeFilters.operator.size > 0 && !activeFilters.operator.has(props.operator)) return false;

        // Status filter
        if (activeFilters.status.size > 0 && !activeFilters.status.has(props.status)) return false;

        return true;
    }

    function setupFilters() {
        // Type filter chips
        document.querySelectorAll('[data-filter="type"] .filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const value = chip.dataset.value;
                chip.classList.toggle('active');
                if (activeFilters.type.has(value)) {
                    activeFilters.type.delete(value);
                } else {
                    activeFilters.type.add(value);
                }
                renderPipelines();
            });
        });

        // State filter chips
        document.querySelectorAll('[data-filter="state"] .filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const value = chip.dataset.value;
                chip.classList.toggle('active');
                if (activeFilters.state.has(value)) {
                    activeFilters.state.delete(value);
                } else {
                    activeFilters.state.add(value);
                }
                renderPipelines();
            });
        });

        // Status filter chips
        document.querySelectorAll('[data-filter="status"] .filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const value = chip.dataset.value;
                chip.classList.toggle('active');
                if (activeFilters.status.has(value)) {
                    activeFilters.status.delete(value);
                } else {
                    activeFilters.status.add(value);
                }
                renderPipelines();
            });
        });

        // Search
        const searchInput = document.getElementById('search-input');
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                searchTerm = e.target.value.trim();
                renderPipelines();
            }, 200);
        });
    }

    // ── Pipeline List ──────────────────────────────────────
    function updatePipelineList(features) {
        const listEl = document.getElementById('pipeline-list');
        const countEl = document.getElementById('pipeline-count');

        countEl.textContent = `${features.length} pipeline${features.length !== 1 ? 's' : ''} shown`;

        listEl.innerHTML = features.map(f => {
            const p = f.properties;
            const color = getPipelineColor(p);
            const gbbId = p.gbb_pipeline_id;
            const flowData = gbbId ? aemoStatus[gbbId] : null;
            let flowInfo = '';
            if (flowData) {
                const uColor = AEMO.getUtilisationColor(flowData.utilisation_pct);
                flowInfo = ` | <span style="color:${uColor}">${flowData.utilisation_pct}%</span>`;
            }

            return `<div class="pipeline-list-item" data-name="${p.name}">
                <div class="pl-name">${p.name}</div>
                <div class="pl-meta">
                    <span class="pl-type-dot" style="background:${color}"></span>
                    ${p.operator} | ${p.length_km} km${flowInfo}
                </div>
            </div>`;
        }).join('');

        // Click to zoom
        listEl.querySelectorAll('.pipeline-list-item').forEach(item => {
            item.addEventListener('click', () => {
                const name = item.dataset.name;
                zoomToPipeline(name);

                // Highlight in list
                listEl.querySelectorAll('.pipeline-list-item').forEach(i => i.classList.remove('highlighted'));
                item.classList.add('highlighted');
            });
        });
    }

    function zoomToPipeline(name) {
        pipelineLayer.eachLayer(layer => {
            if (layer.pipelineName === name) {
                // It's a GeoJSON group layer, get the actual polyline inside
                layer.eachLayer(innerLayer => {
                    if (innerLayer.getBounds) {
                        map.fitBounds(innerLayer.getBounds(), { padding: [60, 60] });
                        innerLayer.openPopup();
                        innerLayer.setStyle({ weight: 6, opacity: 1 });
                        setTimeout(() => renderPipelines(), 3000);
                    }
                });
            }
        });
    }

    // ── Stats ──────────────────────────────────────────────
    function updateStats(features) {
        const totalLength = features.reduce((sum, f) => sum + (f.properties.length_km || 0), 0);
        const gasCount = features.filter(f => f.properties.type === 'Gas').length;
        const oilCount = features.filter(f => f.properties.type === 'Oil').length;

        document.getElementById('stat-total').textContent = features.length;
        document.getElementById('stat-length').textContent = totalLength.toLocaleString() + ' km';
        document.getElementById('stat-gas').textContent = gasCount;
        document.getElementById('stat-oil').textContent = oilCount;
    }

    // ── AEMO Data Refresh ──────────────────────────────────
    async function refreshAEMOData() {
        const statusDot = document.getElementById('status-dot');
        const statusText = document.getElementById('status-text');

        statusDot.className = 'status-dot loading';
        statusText.textContent = 'Fetching AEMO data...';

        try {
            aemoStatus = await AEMO.getPipelineStatus();

            const isLive = Object.values(aemoStatus).some(
                d => d.dataSource && d.dataSource.includes('Live')
            );

            statusDot.className = isLive ? 'status-dot' : 'status-dot';
            statusText.textContent = isLive
                ? 'AEMO GBB Live'
                : `AEMO Simulated (${new Date().toLocaleTimeString()})`;

            renderPipelines();
        } catch (err) {
            console.error('AEMO refresh error:', err);
            statusDot.className = 'status-dot error';
            statusText.textContent = 'AEMO unavailable';
        }
    }

    // ── Mobile sidebar toggle ──────────────────────────────
    function setupMobile() {
        const toggle = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('sidebar');

        if (toggle) {
            toggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });

            // Close sidebar when clicking map on mobile
            map.on('click', () => {
                sidebar.classList.remove('open');
            });
        }
    }

    // ── Initialisation ─────────────────────────────────────
    async function init() {
        const loadingOverlay = document.getElementById('loading-overlay');

        initMap();

        // Load data in parallel
        const [data] = await Promise.all([
            loadPipelineData(),
            refreshAEMOData()
        ]);

        if (!data) {
            loadingOverlay.innerHTML = '<p>Failed to load pipeline data. Please refresh.</p>';
            return;
        }

        renderPipelines();
        renderHubs();
        setupFilters();
        setupMobile();

        // Refresh button
        document.getElementById('refresh-btn').addEventListener('click', refreshAEMOData);

        // Auto-refresh AEMO data every 5 minutes
        setInterval(refreshAEMOData, 5 * 60 * 1000);

        // Hide loading
        loadingOverlay.classList.add('hidden');
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
