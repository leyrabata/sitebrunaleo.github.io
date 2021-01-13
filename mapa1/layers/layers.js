var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_queimadas_1 = new ol.format.GeoJSON();
var features_queimadas_1 = format_queimadas_1.readFeatures(json_queimadas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_queimadas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_queimadas_1.addFeatures(features_queimadas_1);
var lyr_queimadas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_queimadas_1, 
                style: style_queimadas_1,
                interactive: true,
                title: '<img src="styles/legend/queimadas_1.png" /> queimadas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_queimadas_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_queimadas_1];
lyr_queimadas_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DataHora': 'DataHora', 'Satelite': 'Satelite', 'Pais': 'Pais', 'Estado': 'Estado', 'Municipi': 'Municipi', 'Bioma': 'Bioma', 'DiaSemCh': 'DiaSemCh', 'Precipit': 'Precipit', 'RiscoFog': 'RiscoFog', 'Latitude': 'Latitude', 'Longitud': 'Longitud', 'AreaIndu': 'AreaIndu', 'FRP': 'FRP', });
lyr_queimadas_1.set('fieldImages', {'OBJECTID': '', 'DataHora': '', 'Satelite': '', 'Pais': '', 'Estado': '', 'Municipi': '', 'Bioma': '', 'DiaSemCh': '', 'Precipit': '', 'RiscoFog': '', 'Latitude': '', 'Longitud': '', 'AreaIndu': '', 'FRP': '', });
lyr_queimadas_1.set('fieldLabels', {'OBJECTID': 'no label', 'DataHora': 'no label', 'Satelite': 'no label', 'Pais': 'no label', 'Estado': 'no label', 'Municipi': 'no label', 'Bioma': 'no label', 'DiaSemCh': 'no label', 'Precipit': 'no label', 'RiscoFog': 'no label', 'Latitude': 'no label', 'Longitud': 'no label', 'AreaIndu': 'no label', 'FRP': 'no label', });
lyr_queimadas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});