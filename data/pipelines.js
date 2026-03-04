const PIPELINE_DATA = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Moomba to Sydney Pipeline (MSP)",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "NSW/SA",
        "length_km": 2029,
        "diameter_mm": 864,
        "status": "Operating",
        "capacity_tj_day": 446,
        "year_commissioned": 1976,
        "description": "Major east coast gas transmission pipeline connecting Moomba gas hub to Sydney",
        "gbb_pipeline_id": "MSP"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [140.20, -28.10], [140.50, -28.40], [141.00, -28.80],
          [141.50, -29.20], [142.00, -29.60], [142.50, -30.00],
          [143.00, -30.40], [143.50, -30.80], [144.00, -31.20],
          [144.50, -31.50], [145.00, -31.80], [145.50, -32.20],
          [146.00, -32.50], [146.50, -32.80], [147.00, -33.10],
          [147.50, -33.40], [148.00, -33.60], [148.50, -33.70],
          [149.00, -33.80], [149.50, -33.80], [150.00, -33.85],
          [150.50, -33.85], [151.00, -33.87], [151.21, -33.87]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Eastern Gas Pipeline (EGP)",
        "operator": "Jemena",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "VIC/NSW",
        "length_km": 797,
        "diameter_mm": 457,
        "status": "Operating",
        "capacity_tj_day": 289,
        "year_commissioned": 2000,
        "description": "Connects Longford gas processing plant in Gippsland to Sydney via the NSW south coast",
        "gbb_pipeline_id": "EGP"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [147.07, -38.15], [147.20, -38.00], [147.50, -37.70],
          [147.80, -37.40], [148.10, -37.10], [148.40, -36.80],
          [148.70, -36.50], [149.00, -36.20], [149.30, -35.90],
          [149.60, -35.60], [149.80, -35.30], [150.00, -35.00],
          [150.20, -34.70], [150.40, -34.50], [150.60, -34.30],
          [150.80, -34.10], [151.00, -33.95], [151.21, -33.87]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "South West Queensland Pipeline (SWQP)",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "QLD/SA",
        "length_km": 937,
        "diameter_mm": 660,
        "status": "Operating",
        "capacity_tj_day": 385,
        "year_commissioned": 1996,
        "description": "Connects Ballera gas hub in SW Queensland to Moomba and the eastern gas grid",
        "gbb_pipeline_id": "SWQP"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [141.80, -27.40], [141.50, -27.50], [141.20, -27.60],
          [140.90, -27.70], [140.60, -27.80], [140.30, -27.90],
          [140.20, -28.10]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Queensland Gas Pipeline (QGP)",
        "operator": "Jemena",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "QLD",
        "length_km": 627,
        "diameter_mm": 457,
        "status": "Operating",
        "capacity_tj_day": 142,
        "year_commissioned": 1989,
        "description": "Connects Ballera to Gladstone via Wallumbilla, serving central Queensland",
        "gbb_pipeline_id": "QGP"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [141.80, -27.40], [142.50, -27.20], [143.20, -27.00],
          [144.00, -26.80], [144.80, -26.60], [145.50, -26.40],
          [146.20, -26.20], [147.00, -26.00], [147.80, -25.50],
          [148.50, -25.00], [149.00, -24.50], [149.50, -24.00],
          [150.00, -23.80], [150.50, -23.70], [151.27, -23.85]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Roma to Brisbane Pipeline (RBP)",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "QLD",
        "length_km": 440,
        "diameter_mm": 457,
        "status": "Operating",
        "capacity_tj_day": 210,
        "year_commissioned": 1969,
        "description": "Major gas pipeline supplying Brisbane and SE Queensland from the Surat Basin",
        "gbb_pipeline_id": "RBP"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [148.78, -26.57], [148.90, -26.70], [149.20, -26.90],
          [149.50, -27.10], [149.80, -27.20], [150.10, -27.30],
          [150.40, -27.35], [150.70, -27.40], [151.00, -27.45],
          [151.30, -27.47], [151.60, -27.45], [151.90, -27.43],
          [152.20, -27.42], [152.50, -27.40], [152.80, -27.42],
          [153.02, -27.47]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Victorian Transmission System (VTS)",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "VIC",
        "length_km": 2000,
        "diameter_mm": 750,
        "status": "Operating",
        "capacity_tj_day": 1100,
        "year_commissioned": 1969,
        "description": "Major gas transmission network supplying Melbourne and Victoria from Longford and other sources",
        "gbb_pipeline_id": "VTS"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [147.07, -38.15], [146.50, -38.10], [146.00, -38.05],
          [145.50, -37.95], [145.20, -37.85], [145.00, -37.82],
          [144.96, -37.81]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Longford to Melbourne Pipeline",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "VIC",
        "length_km": 195,
        "diameter_mm": 750,
        "status": "Operating",
        "capacity_tj_day": 1030,
        "year_commissioned": 1969,
        "description": "Primary gas supply pipeline from Longford processing plant to Melbourne metro area",
        "gbb_pipeline_id": "VTS"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [147.07, -38.15], [146.70, -38.20], [146.30, -38.15],
          [145.90, -38.05], [145.50, -37.95], [145.10, -37.85],
          [144.96, -37.81]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "SEA Gas Pipeline",
        "operator": "SEA Gas (APA/CKI)",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "VIC/SA",
        "length_km": 680,
        "diameter_mm": 457,
        "status": "Operating",
        "capacity_tj_day": 314,
        "year_commissioned": 2004,
        "description": "Connects Port Campbell in western Victoria to Adelaide, providing gas supply to South Australia",
        "gbb_pipeline_id": "SEAGAS"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [142.90, -38.60], [142.50, -38.40], [142.00, -38.20],
          [141.50, -38.00], [141.00, -37.80], [140.50, -37.50],
          [140.00, -37.20], [139.50, -36.80], [139.20, -36.40],
          [138.90, -36.00], [138.70, -35.50], [138.60, -34.93]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Moomba to Adelaide Pipeline System (MAPS)",
        "operator": "Epic Energy",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "SA",
        "length_km": 1185,
        "diameter_mm": 660,
        "status": "Operating",
        "capacity_tj_day": 252,
        "year_commissioned": 1969,
        "description": "Major gas pipeline connecting Moomba gas hub to Adelaide, primary gas supply for South Australia",
        "gbb_pipeline_id": "MAPS"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [140.20, -28.10], [140.00, -28.50], [139.80, -29.00],
          [139.60, -29.50], [139.40, -30.00], [139.20, -30.50],
          [139.00, -31.00], [138.80, -31.50], [138.70, -32.00],
          [138.65, -32.50], [138.62, -33.00], [138.60, -33.50],
          [138.60, -34.00], [138.60, -34.50], [138.60, -34.93]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Dampier to Bunbury Natural Gas Pipeline (DBNGP)",
        "operator": "DBP (AGIG)",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "WA",
        "length_km": 1530,
        "diameter_mm": 1067,
        "status": "Operating",
        "capacity_tj_day": 845,
        "year_commissioned": 1984,
        "description": "Western Australia's primary gas transmission pipeline from the North West Shelf to Perth and the south-west",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [116.68, -20.66], [116.50, -21.00], [116.30, -21.50],
          [116.10, -22.00], [115.90, -22.50], [115.80, -23.00],
          [115.70, -23.50], [115.65, -24.00], [115.60, -24.50],
          [115.55, -25.00], [115.50, -25.50], [115.48, -26.00],
          [115.50, -26.50], [115.55, -27.00], [115.60, -27.50],
          [115.65, -28.00], [115.70, -28.50], [115.75, -29.00],
          [115.78, -29.50], [115.80, -30.00], [115.82, -30.50],
          [115.84, -31.00], [115.86, -31.50], [115.85, -31.95],
          [115.80, -32.50], [115.75, -33.00], [115.64, -33.33]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Goldfields Gas Pipeline (GGP)",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "WA",
        "length_km": 1380,
        "diameter_mm": 400,
        "status": "Operating",
        "capacity_tj_day": 135,
        "year_commissioned": 1996,
        "description": "Supplies gas from the North West Shelf to the Eastern Goldfields region mining operations",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [116.68, -20.66], [117.00, -21.00], [117.50, -21.50],
          [118.00, -22.00], [118.50, -22.50], [119.00, -23.00],
          [119.50, -23.50], [119.80, -24.00], [120.10, -24.50],
          [120.30, -25.00], [120.50, -25.50], [120.70, -26.00],
          [120.90, -26.50], [121.10, -27.00], [121.20, -27.50],
          [121.30, -28.00], [121.40, -28.50], [121.47, -30.75]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Parmelia Gas Pipeline",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "WA",
        "length_km": 340,
        "diameter_mm": 356,
        "status": "Operating",
        "capacity_tj_day": 115,
        "year_commissioned": 1971,
        "description": "Connects Dongara gas field to Perth industrial areas and Kwinana",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [114.93, -29.25], [115.00, -29.50], [115.10, -30.00],
          [115.20, -30.50], [115.40, -31.00], [115.60, -31.50],
          [115.75, -31.80], [115.85, -31.95], [115.86, -32.10],
          [115.82, -32.23]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Amadeus Gas Pipeline",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "NT",
        "length_km": 1657,
        "diameter_mm": 406,
        "status": "Operating",
        "capacity_tj_day": 90,
        "year_commissioned": 1986,
        "description": "Connects Amadeus Basin (Palm Valley, Mereenie) to Darwin via Alice Springs and Tennant Creek",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [132.05, -23.96], [132.00, -23.50], [131.90, -23.00],
          [131.80, -22.50], [131.70, -22.00], [131.60, -21.50],
          [131.50, -21.00], [131.40, -20.50], [131.30, -20.00],
          [131.20, -19.50], [131.10, -19.00], [131.00, -18.50],
          [130.95, -18.00], [130.90, -17.50], [130.87, -17.00],
          [130.85, -16.50], [130.84, -16.00], [130.85, -15.50],
          [130.85, -14.50], [130.84, -13.50], [130.84, -12.46]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Northern Gas Pipeline (NGP)",
        "operator": "Jemena",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "NT/QLD",
        "length_km": 622,
        "diameter_mm": 406,
        "status": "Operating",
        "capacity_tj_day": 90,
        "year_commissioned": 2018,
        "description": "Connects Tennant Creek in NT to Mount Isa in Queensland, linking NT gas to east coast markets",
        "gbb_pipeline_id": "NGP"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [131.10, -19.00], [131.50, -19.10], [132.00, -19.20],
          [132.50, -19.30], [133.00, -19.40], [133.50, -19.50],
          [134.00, -19.60], [134.50, -19.70], [135.00, -19.80],
          [135.50, -19.90], [136.00, -19.95], [136.50, -20.00],
          [137.00, -20.05], [137.50, -20.10], [138.00, -20.20],
          [138.50, -20.30], [139.00, -20.40], [139.49, -20.73]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Carpentaria Gas Pipeline (CGP)",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "QLD",
        "length_km": 840,
        "diameter_mm": 406,
        "status": "Operating",
        "capacity_tj_day": 119,
        "year_commissioned": 1998,
        "description": "Connects Ballera gas hub to Mount Isa, supplying gas to NW Queensland mining operations",
        "gbb_pipeline_id": "CGP"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [141.80, -27.40], [141.50, -27.00], [141.20, -26.50],
          [141.00, -26.00], [140.80, -25.50], [140.60, -25.00],
          [140.40, -24.50], [140.30, -24.00], [140.20, -23.50],
          [140.10, -23.00], [140.00, -22.50], [139.90, -22.00],
          [139.80, -21.50], [139.70, -21.00], [139.49, -20.73]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Queensland Hunter Gas Pipeline (QHGP) / Hunter Gas Pipeline",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "NSW",
        "length_km": 290,
        "diameter_mm": 400,
        "status": "Operating",
        "capacity_tj_day": 150,
        "year_commissioned": 2009,
        "description": "Connects Sydney gas network to Newcastle and Hunter Valley industrial users",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [151.21, -33.87], [151.15, -33.60], [151.10, -33.30],
          [151.05, -33.00], [150.95, -32.70], [150.85, -32.50],
          [150.80, -32.30], [150.78, -32.10], [150.78, -31.90],
          [150.85, -31.70], [150.90, -31.50], [151.00, -31.30],
          [151.10, -31.10], [151.30, -30.90], [151.50, -30.70],
          [151.65, -30.50]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Moomba to Adelaide Pipeline (Lateral)",
        "operator": "Epic Energy",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "SA",
        "length_km": 300,
        "diameter_mm": 508,
        "status": "Operating",
        "capacity_tj_day": 200,
        "year_commissioned": 2003,
        "description": "Supplementary gas pipeline lateral connecting to Adelaide demand centres",
        "gbb_pipeline_id": "MAPS"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [138.60, -34.93], [138.40, -35.10], [138.30, -35.30],
          [138.20, -35.50], [138.10, -35.70], [138.00, -35.90],
          [137.80, -36.10], [137.60, -36.30]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tasmanian Gas Pipeline (TGP)",
        "operator": "Palisade Investment Partners",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "VIC/TAS",
        "length_km": 734,
        "diameter_mm": 305,
        "status": "Operating",
        "capacity_tj_day": 129,
        "year_commissioned": 2002,
        "description": "Subsea and onshore pipeline connecting Longford in Victoria to Tasmania, crossing Bass Strait",
        "gbb_pipeline_id": "TGP"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [147.07, -38.15], [147.00, -38.40], [146.80, -38.70],
          [146.60, -39.00], [146.40, -39.30], [146.30, -39.60],
          [146.30, -39.90], [146.35, -40.20], [146.40, -40.50],
          [146.50, -40.80], [146.60, -41.00], [146.70, -41.10],
          [146.80, -41.17], [147.00, -41.20], [147.15, -41.25],
          [147.33, -41.44]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wallumbilla to Gladstone Pipeline (GLNG)",
        "operator": "Santos GLNG",
        "type": "Gas",
        "commodity": "Natural Gas / CSG",
        "state": "QLD",
        "length_km": 420,
        "diameter_mm": 1067,
        "status": "Operating",
        "capacity_tj_day": 1400,
        "year_commissioned": 2015,
        "description": "Transports coal seam gas from Surat/Bowen Basins to GLNG export facility on Curtis Island, Gladstone",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [149.10, -26.40], [149.30, -26.20], [149.60, -26.00],
          [149.90, -25.80], [150.20, -25.50], [150.50, -25.20],
          [150.80, -24.90], [151.00, -24.60], [151.10, -24.30],
          [151.20, -24.00], [151.27, -23.85]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Australia Pacific LNG Pipeline (APLNG)",
        "operator": "Origin/ConocoPhillips",
        "type": "Gas",
        "commodity": "Natural Gas / CSG",
        "state": "QLD",
        "length_km": 530,
        "diameter_mm": 1067,
        "status": "Operating",
        "capacity_tj_day": 1430,
        "year_commissioned": 2015,
        "description": "Transports CSG from Surat/Bowen Basins to APLNG export facility on Curtis Island, Gladstone",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [149.50, -26.80], [149.70, -26.60], [150.00, -26.30],
          [150.30, -26.00], [150.60, -25.70], [150.90, -25.40],
          [151.10, -25.10], [151.20, -24.70], [151.25, -24.30],
          [151.27, -23.85]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Queensland Curtis LNG Pipeline (QCLNG)",
        "operator": "QGC (Shell)",
        "type": "Gas",
        "commodity": "Natural Gas / CSG",
        "state": "QLD",
        "length_km": 540,
        "diameter_mm": 1067,
        "status": "Operating",
        "capacity_tj_day": 1400,
        "year_commissioned": 2014,
        "description": "Transports CSG from Surat Basin to QCLNG export facility on Curtis Island, Gladstone",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [149.80, -27.00], [150.10, -26.70], [150.40, -26.40],
          [150.70, -26.10], [150.90, -25.70], [151.00, -25.30],
          [151.10, -24.90], [151.15, -24.50], [151.20, -24.10],
          [151.27, -23.85]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Moonie to Brisbane Oil Pipeline",
        "operator": "APA Group",
        "type": "Oil",
        "commodity": "Crude Oil",
        "state": "QLD",
        "length_km": 306,
        "diameter_mm": 203,
        "status": "Operating",
        "capacity_tj_day": null,
        "year_commissioned": 1964,
        "description": "Australia's first major oil pipeline, transporting crude from Moonie oil field to Brisbane refinery",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [150.37, -27.72], [150.60, -27.70], [150.90, -27.65],
          [151.20, -27.60], [151.50, -27.55], [151.80, -27.50],
          [152.10, -27.48], [152.40, -27.47], [152.70, -27.46],
          [153.02, -27.47]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Jackson to Moonie Oil Pipeline",
        "operator": "APA Group",
        "type": "Oil",
        "commodity": "Crude Oil",
        "state": "QLD",
        "length_km": 117,
        "diameter_mm": 168,
        "status": "Operating",
        "capacity_tj_day": null,
        "year_commissioned": 1967,
        "description": "Oil pipeline connecting Jackson oil fields to Moonie pipeline system for transport to Brisbane",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [149.70, -27.30], [149.85, -27.40], [150.00, -27.50],
          [150.15, -27.60], [150.37, -27.72]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Longford to Long Island Point Pipeline (Gippsland)",
        "operator": "Esso/BHP",
        "type": "Oil",
        "commodity": "Crude Oil / Condensate",
        "state": "VIC",
        "length_km": 190,
        "diameter_mm": 508,
        "status": "Operating",
        "capacity_tj_day": null,
        "year_commissioned": 1969,
        "description": "Transports crude oil and condensate from Bass Strait (Longford) to Long Island Point processing",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [147.07, -38.15], [146.70, -38.20], [146.40, -38.22],
          [146.10, -38.20], [145.80, -38.18], [145.50, -38.20],
          [145.30, -38.30], [145.20, -38.35]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bonaparte Gas Pipeline",
        "operator": "ENI Australia",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "NT",
        "length_km": 275,
        "diameter_mm": 660,
        "status": "Operating",
        "capacity_tj_day": 250,
        "year_commissioned": 2006,
        "description": "Offshore pipeline connecting Bayu-Undan field in Timor Sea to Darwin LNG plant at Wickham Point",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [127.50, -10.50], [127.80, -10.80], [128.20, -11.00],
          [128.60, -11.20], [129.00, -11.40], [129.40, -11.60],
          [129.70, -11.80], [130.00, -12.00], [130.40, -12.20],
          [130.84, -12.46]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "North West Shelf Gas Pipeline",
        "operator": "Woodside",
        "type": "Gas",
        "commodity": "Natural Gas / LNG Feed",
        "state": "WA",
        "length_km": 135,
        "diameter_mm": 1067,
        "status": "Operating",
        "capacity_tj_day": 2500,
        "year_commissioned": 1984,
        "description": "Offshore pipeline connecting North Rankin/Goodwyn platforms to Karratha LNG processing plant",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [115.50, -19.60], [115.70, -19.80], [115.90, -20.00],
          [116.10, -20.20], [116.30, -20.40], [116.50, -20.55],
          [116.68, -20.66]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Varanus Island to Perth Pipeline (PBJV)",
        "operator": "AGIG",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "WA",
        "length_km": 1600,
        "diameter_mm": 508,
        "status": "Operating",
        "capacity_tj_day": 340,
        "year_commissioned": 2000,
        "description": "Gas pipeline from Varanus Island hub connecting Carnarvon Basin gas to Perth via DBNGP interconnect",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [115.60, -20.63], [115.65, -20.65], [116.68, -20.66]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Moomba to Sydney Ethane Pipeline",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Ethane",
        "state": "NSW/SA",
        "length_km": 1375,
        "diameter_mm": 203,
        "status": "Operating",
        "capacity_tj_day": null,
        "year_commissioned": 1996,
        "description": "Transports ethane from Moomba to the Qenos petrochemical plant at Botany Bay, Sydney",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [140.20, -28.10], [140.60, -28.50], [141.10, -28.90],
          [141.70, -29.30], [142.30, -29.70], [142.90, -30.10],
          [143.50, -30.50], [144.10, -30.90], [144.70, -31.30],
          [145.30, -31.70], [145.90, -32.10], [146.50, -32.50],
          [147.10, -32.90], [147.70, -33.20], [148.30, -33.50],
          [148.90, -33.70], [149.50, -33.80], [150.10, -33.85],
          [150.70, -33.87], [151.21, -33.89]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Interconnect Pipeline (VIC to SA)",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas",
        "state": "VIC/SA",
        "length_km": 180,
        "diameter_mm": 508,
        "status": "Operating",
        "capacity_tj_day": 85,
        "year_commissioned": 1999,
        "description": "Connects the Victorian Transmission System to the South Australian gas grid near Iona",
        "gbb_pipeline_id": "VIC-SA-INTERCONNECT"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [142.90, -38.60], [142.50, -38.20], [142.00, -37.80],
          [141.70, -37.50], [141.30, -37.20], [141.00, -37.00],
          [140.80, -36.80], [140.50, -36.60]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Darling Downs Pipeline (DDPS)",
        "operator": "APA Group",
        "type": "Gas",
        "commodity": "Natural Gas / CSG",
        "state": "QLD",
        "length_km": 210,
        "diameter_mm": 508,
        "status": "Operating",
        "capacity_tj_day": 300,
        "year_commissioned": 2010,
        "description": "Connects Surat Basin CSG fields to the Darling Downs Power Station and Wallumbilla gas hub",
        "gbb_pipeline_id": "DDPS"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [150.60, -27.35], [150.30, -27.20], [150.00, -27.00],
          [149.70, -26.80], [149.40, -26.60], [149.10, -26.40]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wallumbilla to Gladstone Pipeline (Arrow/Shell)",
        "operator": "Arrow Energy (Shell/PetroChina)",
        "type": "Gas",
        "commodity": "Natural Gas / CSG",
        "state": "QLD",
        "length_km": 467,
        "diameter_mm": 914,
        "status": "Under Development",
        "capacity_tj_day": 700,
        "year_commissioned": null,
        "description": "Proposed CSG pipeline from Surat Basin to Gladstone for LNG export (Arrow Energy project)",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [149.10, -26.40], [149.40, -26.20], [149.70, -26.00],
          [150.00, -25.70], [150.30, -25.40], [150.60, -25.10],
          [150.80, -24.70], [151.00, -24.30], [151.10, -24.00],
          [151.27, -23.85]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wheatstone Ashburton West Pipeline",
        "operator": "Chevron",
        "type": "Gas",
        "commodity": "Natural Gas / LNG Feed",
        "state": "WA",
        "length_km": 225,
        "diameter_mm": 1067,
        "status": "Operating",
        "capacity_tj_day": 1600,
        "year_commissioned": 2017,
        "description": "Offshore pipeline from Wheatstone/Iago fields to Wheatstone LNG plant near Onslow, WA",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [114.80, -19.80], [115.00, -20.00], [115.20, -20.20],
          [115.40, -20.50], [115.55, -20.80], [115.63, -21.06],
          [115.57, -21.58]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gorgon Subsea Pipeline",
        "operator": "Chevron",
        "type": "Gas",
        "commodity": "Natural Gas / LNG Feed",
        "state": "WA",
        "length_km": 70,
        "diameter_mm": 914,
        "status": "Operating",
        "capacity_tj_day": 2100,
        "year_commissioned": 2016,
        "description": "Offshore pipeline connecting Gorgon/Jansz fields to Barrow Island LNG processing facility",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [114.50, -20.30], [114.60, -20.40], [114.70, -20.50],
          [114.80, -20.60], [115.00, -20.75], [115.40, -20.80]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Santos Cooper Basin to Moomba Gathering",
        "operator": "Santos",
        "type": "Gas",
        "commodity": "Natural Gas / Liquids",
        "state": "SA",
        "length_km": 800,
        "diameter_mm": 500,
        "status": "Operating",
        "capacity_tj_day": 600,
        "year_commissioned": 1970,
        "description": "Extensive gathering network connecting Cooper Basin gas and liquids fields to Moomba processing hub",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [139.50, -28.00], [139.70, -28.10], [140.00, -28.10],
          [140.20, -28.10]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Port Bonython to Moomba Liquids Pipeline",
        "operator": "Santos",
        "type": "Oil",
        "commodity": "Condensate / LPG",
        "state": "SA",
        "length_km": 659,
        "diameter_mm": 356,
        "status": "Operating",
        "capacity_tj_day": null,
        "year_commissioned": 1983,
        "description": "Transports liquid hydrocarbons from Moomba processing to Port Bonython export terminal",
        "gbb_pipeline_id": null
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [140.20, -28.10], [140.00, -28.50], [139.80, -29.00],
          [139.50, -29.50], [139.20, -30.00], [138.90, -30.50],
          [138.60, -31.00], [138.30, -31.50], [138.00, -31.80],
          [137.80, -32.10], [137.70, -32.50], [137.75, -32.90],
          [137.78, -33.18]
        ]
      }
    }
  ]
};
