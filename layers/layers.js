var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Strazi_1 = new ol.format.GeoJSON();
var features_Strazi_1 = format_Strazi_1.readFeatures(json_Strazi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strazi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strazi_1.addFeatures(features_Strazi_1);
var lyr_Strazi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Strazi_1, 
                style: style_Strazi_1,
                interactive: true,
                title: '<img src="styles/legend/Strazi_1.png" /> Strazi'
            });
var format_Cladiri_2 = new ol.format.GeoJSON();
var features_Cladiri_2 = format_Cladiri_2.readFeatures(json_Cladiri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cladiri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cladiri_2.addFeatures(features_Cladiri_2);
var lyr_Cladiri_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cladiri_2, 
                style: style_Cladiri_2,
                interactive: true,
                title: '<img src="styles/legend/Cladiri_2.png" /> Cladiri'
            });
var format_Terenuri_3 = new ol.format.GeoJSON();
var features_Terenuri_3 = format_Terenuri_3.readFeatures(json_Terenuri_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terenuri_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenuri_3.addFeatures(features_Terenuri_3);
var lyr_Terenuri_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terenuri_3, 
                style: style_Terenuri_3,
                interactive: true,
                title: '<img src="styles/legend/Terenuri_3.png" /> Terenuri'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Strazi_1.setVisible(true);lyr_Cladiri_2.setVisible(true);lyr_Terenuri_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Strazi_1,lyr_Cladiri_2,lyr_Terenuri_3];
lyr_Strazi_1.set('fieldAliases', {'gfullname': 'gfullname', 'gfullname_': 'gfullname_', 'streetname': 'streetname', });
lyr_Cladiri_2.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'NrCasa': 'NrCasa', });
lyr_Terenuri_3.set('fieldAliases', {'descriptio': 'descriptio', 'landuse': 'landuse', 'typeproper': 'typeproper', 'codcadastr': 'codcadastr', 'cod_parcel': 'cod_parcel', 'aria': 'aria', 'cod|Field': 'cod|Field', 'cod|X': 'cod|X', 'cod|Y': 'cod|Y', 'cod|Rot': 'cod|Rot', 'cod|Show': 'cod|Show', 'cod|AlignH': 'cod|AlignH', 'cod|AlignV': 'cod|AlignV', });
lyr_Strazi_1.set('fieldImages', {'gfullname': 'TextEdit', 'gfullname_': 'TextEdit', 'streetname': 'TextEdit', });
lyr_Cladiri_2.set('fieldImages', {'CodCadastr': 'TextEdit', 'NrCasa': 'TextEdit', });
lyr_Terenuri_3.set('fieldImages', {'descriptio': 'TextEdit', 'landuse': 'TextEdit', 'typeproper': 'TextEdit', 'codcadastr': 'TextEdit', 'cod_parcel': 'TextEdit', 'aria': 'TextEdit', 'cod|Field': 'TextEdit', 'cod|X': 'TextEdit', 'cod|Y': 'TextEdit', 'cod|Rot': 'TextEdit', 'cod|Show': 'Range', 'cod|AlignH': 'TextEdit', 'cod|AlignV': 'TextEdit', });
lyr_Strazi_1.set('fieldLabels', {'gfullname': 'no label', 'gfullname_': 'no label', 'streetname': 'no label', });
lyr_Cladiri_2.set('fieldLabels', {'CodCadastr': 'no label', 'NrCasa': 'no label', });
lyr_Terenuri_3.set('fieldLabels', {'descriptio': 'no label', 'landuse': 'no label', 'typeproper': 'inline label', 'codcadastr': 'inline label', 'cod_parcel': 'inline label', 'aria': 'inline label', 'cod|Field': 'no label', 'cod|X': 'no label', 'cod|Y': 'no label', 'cod|Rot': 'no label', 'cod|Show': 'no label', 'cod|AlignH': 'no label', 'cod|AlignV': 'no label', });
lyr_Terenuri_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});