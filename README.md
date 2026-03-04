# Australian Oil & Gas Pipeline Interactive Map

An interactive web-based map of Australia's major oil and gas pipeline infrastructure with live data integration from AEMO's Gas Bulletin Board.

## Features

- **Interactive Map** — Leaflet.js-powered dark-themed map with 35+ major pipelines rendered as GeoJSON
- **AEMO Live Data** — Real-time pipeline flow and utilisation data from AEMO's Gas Bulletin Board API (with intelligent fallback when API is unavailable)
- **Filter Controls** — Filter pipelines by type (Gas/Oil), state/territory, and operational status
- **Search** — Full-text search across pipeline names, operators, states, and descriptions
- **Hover Tooltips** — Quick pipeline info with live flow data on mouse hover
- **Click Popups** — Detailed pipeline specifications, capacity, commissioning year, and AEMO utilisation bars
- **Facility Markers** — Gas hubs, LNG export terminals, processing plants, and storage facilities
- **Pipeline List** — Sidebar list with click-to-zoom navigation
- **Responsive** — Mobile-friendly with collapsible sidebar
- **Auto-Refresh** — AEMO data refreshes every 5 minutes

## Data Sources

| Source | Data | Type |
|--------|------|------|
| AEMO Gas Bulletin Board | Pipeline flows, capacity, utilisation | Live API |
| Public pipeline records | Routes, operators, specifications | GeoJSON (bundled) |

## Pipeline Coverage

Includes major transmission pipelines across all states:
- **East Coast**: Moomba-Sydney, Eastern Gas, Roma-Brisbane, Victorian Transmission System
- **Queensland LNG**: GLNG, APLNG, QCLNG feed pipelines to Gladstone
- **South Australia**: MAPS (Moomba-Adelaide), SEA Gas
- **Western Australia**: DBNGP (Dampier-Bunbury), Goldfields Gas, Parmelia
- **Northern Territory**: Amadeus Gas Pipeline, Northern Gas Pipeline, Bonaparte
- **Cross-state**: Interconnect pipelines, Tasmanian Gas Pipeline
- **Oil**: Moonie-Brisbane, Longford-Long Island Point, Port Bonython liquids

## Quick Start

No build step required — just serve the files:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .

# Or open index.html directly in a browser
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
├── index.html              # Main application page
├── css/
│   └── style.css           # Dark-themed styling
├── js/
│   ├── aemo.js             # AEMO Gas Bulletin Board API integration
│   └── app.js              # Main map application logic
├── data/
│   └── pipelines.geojson   # Australian pipeline route data
└── README.md
```

## Technology

- **Leaflet.js 1.9** — Interactive mapping library
- **CARTO Dark** — Dark base map tiles
- **AEMO GBB API** — Live gas pipeline data
- **Vanilla JS** — No framework dependencies; runs in any modern browser
