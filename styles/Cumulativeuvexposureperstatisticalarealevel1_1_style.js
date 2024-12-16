var size = 0;
var placement = 'point';

var style_Cumulativeuvexposureperstatisticalarealevel1_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("exposure");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 1.500000 && value <= 7.600000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(77,172,38,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 7.600000 && value <= 10.800000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,196,80,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.800000 && value <= 13.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,219,123,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 13.200000 && value <= 15.600000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,233,172,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 15.600000 && value <= 18.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,243,222,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 18.200000 && value <= 21.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,233,241,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 21.000000 && value <= 24.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(243,204,228,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24.200000 && value <= 27.900000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,165,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 27.900000 && value <= 32.300000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,96,174,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32.300000 && value <= 41.700000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,28,139,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
