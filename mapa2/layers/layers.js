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
var format_biomas_1 = new ol.format.GeoJSON();
var features_biomas_1 = format_biomas_1.readFeatures(json_biomas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_biomas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_biomas_1.addFeatures(features_biomas_1);
var lyr_biomas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_biomas_1, 
                style: style_biomas_1,
                interactive: true,
                title: '<img src="styles/legend/biomas_1.png" /> biomas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_biomas_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_biomas_1];
lyr_biomas_1.set('fieldAliases', {'Bioma': 'Bioma', 'Área': 'Área', });
lyr_biomas_1.set('fieldImages', {'Bioma': '', 'Área': '', });
lyr_biomas_1.set('fieldLabels', {'Bioma': 'no label', 'Área': 'no label', });
lyr_biomas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});