var wms_layers = [];


        var lyr_CartoVoyagerLabels_0 = new ol.layer.Tile({
            'title': 'Carto Voyager Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
            })
        });
var format_District_1 = new ol.format.GeoJSON();
var features_District_1 = format_District_1.readFeatures(json_District_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_1.addFeatures(features_District_1);
var lyr_District_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_1, 
                style: style_District_1,
                popuplayertitle: 'District',
                interactive: false,
                title: '<img src="styles/legend/District_1.png" /> District'
            });
var format_DSDFILE_2 = new ol.format.GeoJSON();
var features_DSDFILE_2 = format_DSDFILE_2.readFeatures(json_DSDFILE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDFILE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDFILE_2.addFeatures(features_DSDFILE_2);
var lyr_DSDFILE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDFILE_2, 
                style: style_DSDFILE_2,
                popuplayertitle: 'DSD FILE',
                interactive: false,
                title: '<img src="styles/legend/DSDFILE_2.png" /> DSD FILE'
            });
var format_FishingCommunities_3 = new ol.format.GeoJSON();
var features_FishingCommunities_3 = format_FishingCommunities_3.readFeatures(json_FishingCommunities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishingCommunities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishingCommunities_3.addFeatures(features_FishingCommunities_3);
cluster_FishingCommunities_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FishingCommunities_3
});
var lyr_FishingCommunities_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FishingCommunities_3, 
                style: style_FishingCommunities_3,
                popuplayertitle: 'Fishing Communities',
                interactive: true,
                title: '<img src="styles/legend/FishingCommunities_3.png" /> Fishing Communities'
            });
var format_Fishinginfrastructure_4 = new ol.format.GeoJSON();
var features_Fishinginfrastructure_4 = format_Fishinginfrastructure_4.readFeatures(json_Fishinginfrastructure_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fishinginfrastructure_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fishinginfrastructure_4.addFeatures(features_Fishinginfrastructure_4);
var lyr_Fishinginfrastructure_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fishinginfrastructure_4, 
                style: style_Fishinginfrastructure_4,
                popuplayertitle: 'Fishing infrastructure ',
                interactive: true,
    title: 'Fishing infrastructure <br />\
    <img src="styles/legend/Fishinginfrastructure_4_0.png" /> Fish Landing Site<br />\
    <img src="styles/legend/Fishinginfrastructure_4_1.png" /> Fish Market<br />\
    <img src="styles/legend/Fishinginfrastructure_4_2.png" /> Fishery Harbour<br />\
    <img src="styles/legend/Fishinginfrastructure_4_3.png" /> Fishery Harbour & Market<br />\
    <img src="styles/legend/Fishinginfrastructure_4_4.png" /> Fishing Jetty<br />' });

lyr_CartoVoyagerLabels_0.setVisible(true);lyr_District_1.setVisible(true);lyr_DSDFILE_2.setVisible(true);lyr_FishingCommunities_3.setVisible(true);lyr_Fishinginfrastructure_4.setVisible(true);
var layersList = [lyr_CartoVoyagerLabels_0,lyr_District_1,lyr_DSDFILE_2,lyr_FishingCommunities_3,lyr_Fishinginfrastructure_4];
lyr_District_1.set('fieldAliases', {'ADM2_EN': 'ADM2_EN', 'ADM2_SI': 'ADM2_SI', 'ADM2_TA': 'ADM2_TA', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_SI': 'ADM1_SI', 'ADM1_TA': 'ADM1_TA', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_SI': 'ADM0_SI', 'ADM0_TA': 'ADM0_TA', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DSDFILE_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM4_EN': 'ADM4_EN', 'ADM4_SI': 'ADM4_SI', 'ADM4_TA': 'ADM4_TA', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM3_EN': 'ADM3_EN', 'ADM3_SI': 'ADM3_SI', 'ADM3_TA': 'ADM3_TA', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_SI': 'ADM2_SI', 'ADM2_TA': 'ADM2_TA', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_SI': 'ADM1_SI', 'ADM1_TA': 'ADM1_TA', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_SI': 'ADM0_SI', 'ADM0_TA': 'ADM0_TA', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_FishingCommunities_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'district': 'district', });
lyr_Fishinginfrastructure_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'District': 'District', 'Challenges': 'Challenges', 'Type': 'Type', });
lyr_District_1.set('fieldImages', {'ADM2_EN': 'TextEdit', 'ADM2_SI': 'TextEdit', 'ADM2_TA': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_SI': 'TextEdit', 'ADM1_TA': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_SI': 'TextEdit', 'ADM0_TA': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DSDFILE_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_SI': 'TextEdit', 'ADM4_TA': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_SI': 'TextEdit', 'ADM3_TA': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_SI': 'TextEdit', 'ADM2_TA': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_SI': 'TextEdit', 'ADM1_TA': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_SI': 'TextEdit', 'ADM0_TA': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_FishingCommunities_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'district': 'TextEdit', });
lyr_Fishinginfrastructure_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'District': 'TextEdit', 'Challenges': 'TextEdit', 'Type': 'TextEdit', });
lyr_District_1.set('fieldLabels', {'ADM2_EN': 'no label', 'ADM2_SI': 'no label', 'ADM2_TA': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_SI': 'no label', 'ADM1_TA': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_SI': 'no label', 'ADM0_TA': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DSDFILE_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM4_EN': 'no label', 'ADM4_SI': 'no label', 'ADM4_TA': 'no label', 'ADM4_PCODE': 'no label', 'ADM4_REF': 'no label', 'ADM3_EN': 'no label', 'ADM3_SI': 'no label', 'ADM3_TA': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_SI': 'no label', 'ADM2_TA': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_SI': 'no label', 'ADM1_TA': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_SI': 'no label', 'ADM0_TA': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_FishingCommunities_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'district': 'inline label - always visible', });
lyr_Fishinginfrastructure_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'District': 'header label - always visible', 'Challenges': 'header label - always visible', 'Type': 'header label - always visible', });
lyr_Fishinginfrastructure_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});