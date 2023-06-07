var wms_layers = [];

var format_akupetaakupeta_0 = new ol.format.GeoJSON();
var features_akupetaakupeta_0 = format_akupetaakupeta_0.readFeatures(json_akupetaakupeta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_akupetaakupeta_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_akupetaakupeta_0.addFeatures(features_akupetaakupeta_0);
var lyr_akupetaakupeta_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_akupetaakupeta_0, 
                style: style_akupetaakupeta_0,
                interactive: true,
    title: 'aku peta aku peta<br />\
    <img src="styles/legend/akupetaakupeta_0_0.png" /> Beresiko Rendah<br />\
    <img src="styles/legend/akupetaakupeta_0_1.png" /> Beresiko Sedang<br />\
    <img src="styles/legend/akupetaakupeta_0_2.png" /> Beresiko Tinggi<br />'
        });

lyr_akupetaakupeta_0.setVisible(true);
var layersList = [lyr_akupetaakupeta_0];
lyr_akupetaakupeta_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'tingkat kerawanan kebakaran - nilai_field_1': 'tingkat kerawanan kebakaran - nilai_field_1', 'tingkat kerawanan kebakaran - nilai_tingkat_resiko': 'tingkat kerawanan kebakaran - nilai_tingkat_resiko', });
lyr_akupetaakupeta_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'tingkat kerawanan kebakaran - nilai_field_1': 'TextEdit', 'tingkat kerawanan kebakaran - nilai_tingkat_resiko': 'Range', });
lyr_akupetaakupeta_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'tingkat kerawanan kebakaran - nilai_field_1': 'no label', 'tingkat kerawanan kebakaran - nilai_tingkat_resiko': 'no label', });
lyr_akupetaakupeta_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});