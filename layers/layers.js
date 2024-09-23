var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_DlimitationduSngal_1 = new ol.format.GeoJSON();
var features_DlimitationduSngal_1 = format_DlimitationduSngal_1.readFeatures(json_DlimitationduSngal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DlimitationduSngal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DlimitationduSngal_1.addFeatures(features_DlimitationduSngal_1);
var lyr_DlimitationduSngal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DlimitationduSngal_1, 
                style: style_DlimitationduSngal_1,
                popuplayertitle: "Délimitation du Sénégal",
                interactive: true,
                title: '<img src="styles/legend/DlimitationduSngal_1.png" /> Délimitation du Sénégal'
            });
var format_Lgendedesclassesdoccupationdusol_2 = new ol.format.GeoJSON();
var features_Lgendedesclassesdoccupationdusol_2 = format_Lgendedesclassesdoccupationdusol_2.readFeatures(json_Lgendedesclassesdoccupationdusol_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgendedesclassesdoccupationdusol_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgendedesclassesdoccupationdusol_2.addFeatures(features_Lgendedesclassesdoccupationdusol_2);
var lyr_Lgendedesclassesdoccupationdusol_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgendedesclassesdoccupationdusol_2, 
                style: style_Lgendedesclassesdoccupationdusol_2,
                popuplayertitle: "Légende des classes d'occupation du sol",
                interactive: true,
    title: 'Légende des classes d\'occupation du sol<br />\
    <img src="styles/legend/Lgendedesclassesdoccupationdusol_2_0.png" /> eau<br />\
    <img src="styles/legend/Lgendedesclassesdoccupationdusol_2_1.png" /> sol nu<br />\
    <img src="styles/legend/Lgendedesclassesdoccupationdusol_2_2.png" /> empreinte urbaine<br />\
    <img src="styles/legend/Lgendedesclassesdoccupationdusol_2_3.png" /> végétation<br />'
        });
var lyr_Occupationdusol2001_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Occupation du sol 2001",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Occupationdusol2001_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1953090.238163, 1641590.174932, -1905713.481765, 1676936.709539]
                            })
                        });
var lyr_Occupationdusol2011_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Occupation du sol 2011",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Occupationdusol2011_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1953090.238163, 1641590.174932, -1905713.481765, 1676936.709539]
                            })
                        });
var lyr_Occupationdusol2021_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Occupation du sol 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Occupationdusol2021_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1953090.238163, 1641590.174932, -1905713.481765, 1676936.709539]
                            })
                        });
var format_Localits_6 = new ol.format.GeoJSON();
var features_Localits_6 = format_Localits_6.readFeatures(json_Localits_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localits_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localits_6.addFeatures(features_Localits_6);
var lyr_Localits_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localits_6, 
                style: style_Localits_6,
                popuplayertitle: "Localités",
                interactive: true,
                title: '<img src="styles/legend/Localits_6.png" /> Localités'
            });
var format_Limitesdesdpartements_7 = new ol.format.GeoJSON();
var features_Limitesdesdpartements_7 = format_Limitesdesdpartements_7.readFeatures(json_Limitesdesdpartements_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdesdpartements_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdesdpartements_7.addFeatures(features_Limitesdesdpartements_7);
var lyr_Limitesdesdpartements_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdesdpartements_7, 
                style: style_Limitesdesdpartements_7,
                popuplayertitle: "Limites des départements",
                interactive: true,
                title: '<img src="styles/legend/Limitesdesdpartements_7.png" /> Limites des départements'
            });

lyr_Positronretina_0.setVisible(true);lyr_DlimitationduSngal_1.setVisible(true);lyr_Lgendedesclassesdoccupationdusol_2.setVisible(true);lyr_Occupationdusol2001_3.setVisible(true);lyr_Occupationdusol2011_4.setVisible(true);lyr_Occupationdusol2021_5.setVisible(true);lyr_Localits_6.setVisible(true);lyr_Limitesdesdpartements_7.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_DlimitationduSngal_1,lyr_Lgendedesclassesdoccupationdusol_2,lyr_Occupationdusol2001_3,lyr_Occupationdusol2011_4,lyr_Occupationdusol2021_5,lyr_Localits_6,lyr_Limitesdesdpartements_7];
lyr_DlimitationduSngal_1.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_Lgendedesclassesdoccupationdusol_2.set('fieldAliases', {'DN': 'DN', 'superficie': 'superficie', 'sup_hect': 'sup_hect', 'classes': 'Classes', 'Taux': 'Taux de couverture (%)', });
lyr_Localits_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'Nom': 'Nom', });
lyr_Limitesdesdpartements_7.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'Nom', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'area': 'area', });
lyr_DlimitationduSngal_1.set('fieldImages', {'GID_0': 'Hidden', 'COUNTRY': 'Hidden', });
lyr_Lgendedesclassesdoccupationdusol_2.set('fieldImages', {'DN': 'Hidden', 'superficie': 'Hidden', 'sup_hect': 'Hidden', 'classes': 'Hidden', 'Taux': 'Hidden', });
lyr_Localits_6.set('fieldImages', {'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'population': 'Hidden', 'Nom': 'TextEdit', });
lyr_Limitesdesdpartements_7.set('fieldImages', {'GID_2': 'Hidden', 'GID_0': 'Hidden', 'COUNTRY': 'Hidden', 'GID_1': 'Hidden', 'NAME_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'NAME_2': 'TextEdit', 'VARNAME_2': 'Hidden', 'NL_NAME_2': 'Hidden', 'TYPE_2': 'Hidden', 'ENGTYPE_2': 'Hidden', 'CC_2': 'Hidden', 'HASC_2': 'Hidden', 'area': 'Hidden', });
lyr_DlimitationduSngal_1.set('fieldLabels', {});
lyr_Lgendedesclassesdoccupationdusol_2.set('fieldLabels', {});
lyr_Localits_6.set('fieldLabels', {'Nom': 'inline label - always visible', });
lyr_Limitesdesdpartements_7.set('fieldLabels', {'NAME_2': 'inline label - always visible', });
lyr_Limitesdesdpartements_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});