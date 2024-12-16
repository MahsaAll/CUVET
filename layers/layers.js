var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Cumulativeuvexposureperstatisticalarealevel1_1 = new ol.format.GeoJSON();
var features_Cumulativeuvexposureperstatisticalarealevel1_1 = format_Cumulativeuvexposureperstatisticalarealevel1_1.readFeatures(json_Cumulativeuvexposureperstatisticalarealevel1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cumulativeuvexposureperstatisticalarealevel1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cumulativeuvexposureperstatisticalarealevel1_1.addFeatures(features_Cumulativeuvexposureperstatisticalarealevel1_1);
var lyr_Cumulativeuvexposureperstatisticalarealevel1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cumulativeuvexposureperstatisticalarealevel1_1, 
                style: style_Cumulativeuvexposureperstatisticalarealevel1_1,
                popuplayertitle: "Cumulative uv exposure per statistical area level 1",
                interactive: true,
    title: 'Cumulative uv exposure per statistical area level 1<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_0.png" /> 1.5 to 7.6 mins<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_1.png" /> 7.6 to 10.8 mins<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_2.png" /> 10.8 to 13.2 mins<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_3.png" /> 13.2 to 15.6 mins<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_4.png" /> 15.6 to 18.2 mins<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_5.png" /> 18.2 to 21 mins<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_6.png" /> 21 to 24.2 mins<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_7.png" /> 24.2 to 27.9 mins<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_8.png" /> 27.9 to 32.3 mins<br />\
    <img src="styles/legend/Cumulativeuvexposureperstatisticalarealevel1_1_9.png" /> 32.3 to 41.7 mins<br />'
        });
var format_Averageuvexposurepernetworklink_2 = new ol.format.GeoJSON();
var features_Averageuvexposurepernetworklink_2 = format_Averageuvexposurepernetworklink_2.readFeatures(json_Averageuvexposurepernetworklink_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Averageuvexposurepernetworklink_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Averageuvexposurepernetworklink_2.addFeatures(features_Averageuvexposurepernetworklink_2);
var lyr_Averageuvexposurepernetworklink_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Averageuvexposurepernetworklink_2, 
                style: style_Averageuvexposurepernetworklink_2,
                popuplayertitle: "Average uv exposure per network link",
                interactive: true,
    title: 'Average uv exposure per network link<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_0.png" /> 0 to 0.4 mins<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_1.png" /> 0.4 to 0.6 mins<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_2.png" /> 0.6 to 0.8 mins<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_3.png" /> 0.8 to 1.1 mins<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_4.png" /> 1.1 to 1.4 mins<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_5.png" /> 1.4 to 1.8 mins<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_6.png" /> 1.8 to 2.3 mins<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_7.png" /> 2.3 to 2.9 mins<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_8.png" /> 2.9 to 3.8 mins<br />\
    <img src="styles/legend/Averageuvexposurepernetworklink_2_9.png" /> 3.8 to 7.1 mins<br />'
        });
var format_Localgovernmentareas_3 = new ol.format.GeoJSON();
var features_Localgovernmentareas_3 = format_Localgovernmentareas_3.readFeatures(json_Localgovernmentareas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localgovernmentareas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localgovernmentareas_3.addFeatures(features_Localgovernmentareas_3);
var lyr_Localgovernmentareas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localgovernmentareas_3, 
                style: style_Localgovernmentareas_3,
                popuplayertitle: "Local government areas",
                interactive: true,
                title: '<img src="styles/legend/Localgovernmentareas_3.png" /> Local government areas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Cumulativeuvexposureperstatisticalarealevel1_1.setVisible(true);lyr_Averageuvexposurepernetworklink_2.setVisible(false);lyr_Localgovernmentareas_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Cumulativeuvexposureperstatisticalarealevel1_1,lyr_Averageuvexposurepernetworklink_2,lyr_Localgovernmentareas_3];
lyr_Cumulativeuvexposureperstatisticalarealevel1_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'sa1_code21': 'sa1_code21', 'exposure': 'exposure', 'lga': 'lga', });
lyr_Averageuvexposurepernetworklink_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'link_id': 'link_id', 'exposure': 'exposure', });
lyr_Localgovernmentareas_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'lga': 'lga', });
lyr_Cumulativeuvexposureperstatisticalarealevel1_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'sa1_code21': 'TextEdit', 'exposure': 'TextEdit', 'lga': 'TextEdit', });
lyr_Averageuvexposurepernetworklink_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'link_id': 'TextEdit', 'exposure': 'TextEdit', });
lyr_Localgovernmentareas_3.set('fieldImages', {'ogc_fid': 'TextEdit', 'lga': 'TextEdit', });
lyr_Cumulativeuvexposureperstatisticalarealevel1_1.set('fieldLabels', {'ogc_fid': 'hidden field', 'sa1_code21': 'hidden field', 'exposure': 'inline label - visible with data', 'lga': 'inline label - visible with data', });
lyr_Averageuvexposurepernetworklink_2.set('fieldLabels', {'ogc_fid': 'hidden field', 'link_id': 'hidden field', 'exposure': 'inline label - visible with data', });
lyr_Localgovernmentareas_3.set('fieldLabels', {'ogc_fid': 'hidden field', 'lga': 'inline label - visible with data', });
lyr_Localgovernmentareas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});