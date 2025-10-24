var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ProjectScopeAdmboundaries_2 = new ol.format.GeoJSON();
var features_ProjectScopeAdmboundaries_2 = format_ProjectScopeAdmboundaries_2.readFeatures(json_ProjectScopeAdmboundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectScopeAdmboundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectScopeAdmboundaries_2.addFeatures(features_ProjectScopeAdmboundaries_2);
var lyr_ProjectScopeAdmboundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectScopeAdmboundaries_2, 
                style: style_ProjectScopeAdmboundaries_2,
                popuplayertitle: 'Project Scope Adm boundaries',
                interactive: true,
                title: '<img src="styles/legend/ProjectScopeAdmboundaries_2.png" /> Project Scope Adm boundaries'
            });
var format_MsaginyaRiver_3 = new ol.format.GeoJSON();
var features_MsaginyaRiver_3 = format_MsaginyaRiver_3.readFeatures(json_MsaginyaRiver_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MsaginyaRiver_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MsaginyaRiver_3.addFeatures(features_MsaginyaRiver_3);
var lyr_MsaginyaRiver_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MsaginyaRiver_3, 
                style: style_MsaginyaRiver_3,
                popuplayertitle: 'Msaginya River',
                interactive: true,
                title: '<img src="styles/legend/MsaginyaRiver_3.png" /> Msaginya River'
            });
var format_KampuniCattleTraff_4 = new ol.format.GeoJSON();
var features_KampuniCattleTraff_4 = format_KampuniCattleTraff_4.readFeatures(json_KampuniCattleTraff_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KampuniCattleTraff_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KampuniCattleTraff_4.addFeatures(features_KampuniCattleTraff_4);
var lyr_KampuniCattleTraff_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KampuniCattleTraff_4, 
                style: style_KampuniCattleTraff_4,
                popuplayertitle: 'Kampuni Cattle Traff',
                interactive: true,
                title: '<img src="styles/legend/KampuniCattleTraff_4.png" /> Kampuni Cattle Traff'
            });
var format_CattleTraff_5 = new ol.format.GeoJSON();
var features_CattleTraff_5 = format_CattleTraff_5.readFeatures(json_CattleTraff_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CattleTraff_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CattleTraff_5.addFeatures(features_CattleTraff_5);
var lyr_CattleTraff_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CattleTraff_5, 
                style: style_CattleTraff_5,
                popuplayertitle: 'Cattle Traff',
                interactive: true,
                title: '<img src="styles/legend/CattleTraff_5.png" /> Cattle Traff'
            });
var format_ConservationActivitiesKatumaRiver_6 = new ol.format.GeoJSON();
var features_ConservationActivitiesKatumaRiver_6 = format_ConservationActivitiesKatumaRiver_6.readFeatures(json_ConservationActivitiesKatumaRiver_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConservationActivitiesKatumaRiver_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConservationActivitiesKatumaRiver_6.addFeatures(features_ConservationActivitiesKatumaRiver_6);
cluster_ConservationActivitiesKatumaRiver_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ConservationActivitiesKatumaRiver_6
});
var lyr_ConservationActivitiesKatumaRiver_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ConservationActivitiesKatumaRiver_6, 
                style: style_ConservationActivitiesKatumaRiver_6,
                popuplayertitle: 'Conservation Activities Katuma River',
                interactive: true,
                title: '<img src="styles/legend/ConservationActivitiesKatumaRiver_6.png" /> Conservation Activities Katuma River'
            });
var format_UtobeirrigationScheme1_7 = new ol.format.GeoJSON();
var features_UtobeirrigationScheme1_7 = format_UtobeirrigationScheme1_7.readFeatures(json_UtobeirrigationScheme1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UtobeirrigationScheme1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UtobeirrigationScheme1_7.addFeatures(features_UtobeirrigationScheme1_7);
var lyr_UtobeirrigationScheme1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UtobeirrigationScheme1_7, 
                style: style_UtobeirrigationScheme1_7,
                popuplayertitle: 'Utobe irrigation Scheme 1',
                interactive: true,
                title: '<img src="styles/legend/UtobeirrigationScheme1_7.png" /> Utobe irrigation Scheme 1'
            });
var format_waterway_river_8 = new ol.format.GeoJSON();
var features_waterway_river_8 = format_waterway_river_8.readFeatures(json_waterway_river_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterway_river_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterway_river_8.addFeatures(features_waterway_river_8);
var lyr_waterway_river_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterway_river_8, 
                style: style_waterway_river_8,
                popuplayertitle: 'waterway_river',
                interactive: true,
                title: '<img src="styles/legend/waterway_river_8.png" /> waterway_river'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ProjectScopeAdmboundaries_2.setVisible(true);lyr_MsaginyaRiver_3.setVisible(true);lyr_KampuniCattleTraff_4.setVisible(true);lyr_CattleTraff_5.setVisible(true);lyr_ConservationActivitiesKatumaRiver_6.setVisible(true);lyr_UtobeirrigationScheme1_7.setVisible(true);lyr_waterway_river_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_ProjectScopeAdmboundaries_2,lyr_MsaginyaRiver_3,lyr_KampuniCattleTraff_4,lyr_CattleTraff_5,lyr_ConservationActivitiesKatumaRiver_6,lyr_UtobeirrigationScheme1_7,lyr_waterway_river_8];
lyr_ProjectScopeAdmboundaries_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'counc_code': 'counc_code', 'counc_name': 'counc_name', 'const_code': 'const_code', 'const_name': 'const_name', 'div_code': 'div_code', 'div_name': 'div_name', 'ward_code': 'ward_code', 'ward_name': 'ward_name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_MsaginyaRiver_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_KampuniCattleTraff_4.set('fieldAliases', {'POINT': 'POINT', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'ELEVATION': 'ELEVATION', 'DESCRIPTIO': 'DESCRIPTIO', });
lyr_CattleTraff_5.set('fieldAliases', {'Point_ID': 'Point_ID', 'East': 'East', 'North': 'North', 'Height': 'Height', 'Code': 'Code', });
lyr_ConservationActivitiesKatumaRiver_6.set('fieldAliases', {'x': 'x', 'y': 'y', 'Name of the Region': 'Name of the Region', 'Name of the District': 'Name of the District', 'Name of the ward': 'Name of the ward', 'Name of the Village': 'Name of the Village', 'Name of the River': 'Name of the River', });
lyr_UtobeirrigationScheme1_7.set('fieldAliases', {'fid': 'fid', 'x': 'x', 'y': 'y', 'Name of the Region': 'Name of the Region', 'Name of the District': 'Name of the District', 'Name of the ward': 'Name of the ward', 'Name of the Village': 'Name of the Village', 'Name of the River': 'Name of the River', });
lyr_waterway_river_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'layer': 'layer', 'name': 'name', });
lyr_ProjectScopeAdmboundaries_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'reg_code': 'TextEdit', 'reg_name': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'counc_code': 'TextEdit', 'counc_name': 'TextEdit', 'const_code': 'TextEdit', 'const_name': 'TextEdit', 'div_code': 'TextEdit', 'div_name': 'TextEdit', 'ward_code': 'TextEdit', 'ward_name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MsaginyaRiver_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_KampuniCattleTraff_4.set('fieldImages', {'POINT': 'TextEdit', 'EASTING': 'TextEdit', 'NORTHING': 'TextEdit', 'ELEVATION': 'TextEdit', 'DESCRIPTIO': 'TextEdit', });
lyr_CattleTraff_5.set('fieldImages', {'Point_ID': 'TextEdit', 'East': 'TextEdit', 'North': 'TextEdit', 'Height': 'TextEdit', 'Code': 'TextEdit', });
lyr_ConservationActivitiesKatumaRiver_6.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'Name of the Region': 'TextEdit', 'Name of the District': 'TextEdit', 'Name of the ward': 'TextEdit', 'Name of the Village': 'TextEdit', 'Name of the River': 'TextEdit', });
lyr_UtobeirrigationScheme1_7.set('fieldImages', {'fid': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Name of the Region': 'TextEdit', 'Name of the District': 'TextEdit', 'Name of the ward': 'TextEdit', 'Name of the Village': 'TextEdit', 'Name of the River': 'TextEdit', });
lyr_waterway_river_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'layer': 'TextEdit', 'name': 'TextEdit', });
lyr_ProjectScopeAdmboundaries_2.set('fieldLabels', {'OBJECTID_1': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'reg_code': 'header label - visible with data', 'reg_name': 'header label - always visible', 'dist_code': 'inline label - visible with data', 'dist_name': 'inline label - visible with data', 'counc_code': 'inline label - visible with data', 'counc_name': 'inline label - visible with data', 'const_code': 'header label - visible with data', 'const_name': 'header label - visible with data', 'div_code': 'inline label - visible with data', 'div_name': 'header label - always visible', 'ward_code': 'inline label - visible with data', 'ward_name': 'inline label - always visible', 'Shape_Leng': 'inline label - visible with data', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_MsaginyaRiver_3.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'header label - visible with data', });
lyr_KampuniCattleTraff_4.set('fieldLabels', {'POINT': 'inline label - visible with data', 'EASTING': 'inline label - visible with data', 'NORTHING': 'header label - visible with data', 'ELEVATION': 'header label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', });
lyr_CattleTraff_5.set('fieldLabels', {'Point_ID': 'inline label - visible with data', 'East': 'inline label - visible with data', 'North': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Code': 'inline label - visible with data', });
lyr_ConservationActivitiesKatumaRiver_6.set('fieldLabels', {'x': 'no label', 'y': 'no label', 'Name of the Region': 'inline label - always visible', 'Name of the District': 'inline label - visible with data', 'Name of the ward': 'inline label - visible with data', 'Name of the Village': 'inline label - visible with data', 'Name of the River': 'inline label - visible with data', });
lyr_UtobeirrigationScheme1_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'Name of the Region': 'inline label - visible with data', 'Name of the District': 'inline label - visible with data', 'Name of the ward': 'header label - visible with data', 'Name of the Village': 'inline label - visible with data', 'Name of the River': 'inline label - visible with data', });
lyr_waterway_river_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'waterway': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_waterway_river_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});