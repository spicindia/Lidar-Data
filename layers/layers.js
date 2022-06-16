var wms_layers = [];

var lyr_L_Open_Green_Area_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_Open_Green_Area",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_Open_Green_Area",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_Open_Green_Area_0, 0]);
var lyr_L_Others_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_Others",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_Others",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_Others_1, 0]);
var lyr_L_Paved_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_Paved",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_Paved",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_Paved_2, 0]);
var lyr_L_Public_And_Semi_Public_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_Public_And_Semi_Public",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_Public_And_Semi_Public",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_Public_And_Semi_Public_3, 0]);
var lyr_L_ROW_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_ROW",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_ROW",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_ROW_4, 0]);
var lyr_L_Public_Utilities_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_Public_Utilities",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_Public_Utilities",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_Public_Utilities_5, 0]);
var lyr_L_Religious_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_Religious",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_Religious",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_Religious_6, 0]);
var lyr_L_Road_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_Road",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_Road",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_Road_7, 0]);
var lyr_L_Residential_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_Residential",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_Residential",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_Residential_8, 0]);
var lyr_L_Traffic_Related_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Lidar/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "L_Traffic_Related",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "L_Traffic_Related",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_L_Traffic_Related_9, 0]);

lyr_L_Open_Green_Area_0.setVisible(true);lyr_L_Others_1.setVisible(true);lyr_L_Paved_2.setVisible(true);lyr_L_Public_And_Semi_Public_3.setVisible(true);lyr_L_ROW_4.setVisible(true);lyr_L_Public_Utilities_5.setVisible(true);lyr_L_Religious_6.setVisible(true);lyr_L_Road_7.setVisible(true);lyr_L_Residential_8.setVisible(true);lyr_L_Traffic_Related_9.setVisible(true);
var layersList = [lyr_L_Open_Green_Area_0,lyr_L_Others_1,lyr_L_Paved_2,lyr_L_Public_And_Semi_Public_3,lyr_L_ROW_4,lyr_L_Public_Utilities_5,lyr_L_Religious_6,lyr_L_Road_7,lyr_L_Residential_8,lyr_L_Traffic_Related_9];
