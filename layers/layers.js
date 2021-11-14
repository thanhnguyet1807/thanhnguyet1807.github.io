var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Khuvcnghincu_1 = new ol.format.GeoJSON();
var features_Khuvcnghincu_1 = format_Khuvcnghincu_1.readFeatures(json_Khuvcnghincu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khuvcnghincu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khuvcnghincu_1.addFeatures(features_Khuvcnghincu_1);
var lyr_Khuvcnghincu_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khuvcnghincu_1, 
                style: style_Khuvcnghincu_1,
                interactive: true,
                title: '<img src="styles/legend/Khuvcnghincu_1.png" /> Khu vực nghiên cứu'
            });
var lyr_MthotnghnghituynthngNgunhttpswwwmarinetrafficcom_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mật độ hoạt động hàng hải (tuyến/tháng) (Nguồn: https://www.marinetraffic.com/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MthotnghnghituynthngNgunhttpswwwmarinetrafficcom_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376817.308098, 732713.551164, 12528417.440354, 2478258.199478]
                            })
                        });
var lyr_Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Tốc độ gió tại độ cao 100m (m/s) (Nguồn: https://globalwindatlas.info/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376748.730527, 732783.116061, 12528627.161511, 2478332.590759]
                            })
                        });
var lyr_Mtgiticao100mWm2Ngunhttpsglobalwindatlasinfo_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mật độ gió tại độ cao 100m (W/m2) (Nguồn: https://globalwindatlas.info/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mtgiticao100mWm2Ngunhttpsglobalwindatlasinfo_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376748.730527, 732783.116061, 12528627.161511, 2478332.590759]
                            })
                        });
var lyr_ahnhymNgunhttpswwwgebconet_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Địa hình đáy (m) (Nguồn: https://www.gebco.net/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ahnhymNgunhttpswwwgebconet_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376851.959073, 732603.595173, 12528544.857571, 2452097.613923]
                            })
                        });
var lyr_KtquKhnngkhuvctimnng_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Kết quả Khả năng khu vực tiềm năng",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KtquKhnngkhuvctimnng_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376748.730527, 732783.116061, 12528627.161511, 2478332.590759]
                            })
                        });
var format_Khuvcrabinkimn_7 = new ol.format.GeoJSON();
var features_Khuvcrabinkimn_7 = format_Khuvcrabinkimn_7.readFeatures(json_Khuvcrabinkimn_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khuvcrabinkimn_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khuvcrabinkimn_7.addFeatures(features_Khuvcrabinkimn_7);
var lyr_Khuvcrabinkimn_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khuvcrabinkimn_7, 
                style: style_Khuvcrabinkimn_7,
                interactive: true,
    title: 'Khu vực rùa biển kiếm ăn<br />\
    <img src="styles/legend/Khuvcrabinkimn_7_0.png" /> Đồi mồi<br />\
    <img src="styles/legend/Khuvcrabinkimn_7_1.png" /> Đồi mồi Dứa<br />\
    <img src="styles/legend/Khuvcrabinkimn_7_2.png" /> Quản đồng<br />\
    <img src="styles/legend/Khuvcrabinkimn_7_3.png" /> Vích<br />'
        });
var format_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8 = new ol.format.GeoJSON();
var features_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8 = format_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8.readFeatures(json_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8.addFeatures(features_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8);
var lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8, 
                style: style_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8,
                interactive: true,
                title: '<img src="styles/legend/CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8.png" /> Các tuyến cáp Internet ngầm (Nguồn: https://www.submarinecablemap.com/country/vietnam)'
            });
var format_NgtrngcamtsnghcNgunVinNghincuHisn_9 = new ol.format.GeoJSON();
var features_NgtrngcamtsnghcNgunVinNghincuHisn_9 = format_NgtrngcamtsnghcNgunVinNghincuHisn_9.readFeatures(json_NgtrngcamtsnghcNgunVinNghincuHisn_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NgtrngcamtsnghcNgunVinNghincuHisn_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NgtrngcamtsnghcNgunVinNghincuHisn_9.addFeatures(features_NgtrngcamtsnghcNgunVinNghincuHisn_9);
var lyr_NgtrngcamtsnghcNgunVinNghincuHisn_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NgtrngcamtsnghcNgunVinNghincuHisn_9, 
                style: style_NgtrngcamtsnghcNgunVinNghincuHisn_9,
                interactive: true,
    title: 'Ngư trường của một số nghề cá (Nguồn: Viện Nghiên cứu Hải sản)<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_9_0.png" /> Câu cá ngừ bằng nghề cây tay/câu vàng <br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_9_1.png" /> Nghề giã ván<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_9_2.png" /> Nghề kéo đôi<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_9_3.png" /> Nghề lưới chụp<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_9_4.png" /> Nghề rê<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_9_5.png" /> Nghề vây<br />'
        });
var format_Cngbin_10 = new ol.format.GeoJSON();
var features_Cngbin_10 = format_Cngbin_10.readFeatures(json_Cngbin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cngbin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cngbin_10.addFeatures(features_Cngbin_10);
var lyr_Cngbin_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cngbin_10, 
                style: style_Cngbin_10,
                interactive: true,
                title: '<img src="styles/legend/Cngbin_10.png" /> Cảng biển'
            });
var format_Ccmdukh_11 = new ol.format.GeoJSON();
var features_Ccmdukh_11 = format_Ccmdukh_11.readFeatures(json_Ccmdukh_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ccmdukh_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ccmdukh_11.addFeatures(features_Ccmdukh_11);
var lyr_Ccmdukh_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ccmdukh_11, 
                style: style_Ccmdukh_11,
                interactive: true,
                title: '<img src="styles/legend/Ccmdukh_11.png" /> Các mỏ dầu/khí'
            });
var format_Ccngngdnduvtlin_12 = new ol.format.GeoJSON();
var features_Ccngngdnduvtlin_12 = format_Ccngngdnduvtlin_12.readFeatures(json_Ccngngdnduvtlin_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ccngngdnduvtlin_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ccngngdnduvtlin_12.addFeatures(features_Ccngngdnduvtlin_12);
var lyr_Ccngngdnduvtlin_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ccngngdnduvtlin_12, 
                style: style_Ccngngdnduvtlin_12,
                interactive: true,
                title: '<img src="styles/legend/Ccngngdnduvtlin_12.png" /> Các đường ống dẫn dầu về đất liền'
            });
var format_Trmbinp_13 = new ol.format.GeoJSON();
var features_Trmbinp_13 = format_Trmbinp_13.readFeatures(json_Trmbinp_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trmbinp_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trmbinp_13.addFeatures(features_Trmbinp_13);
var lyr_Trmbinp_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trmbinp_13, 
                style: style_Trmbinp_13,
                interactive: true,
    title: 'Trạm biến áp<br />\
    <img src="styles/legend/Trmbinp_13_0.png" /> 110 kV<br />\
    <img src="styles/legend/Trmbinp_13_1.png" /> 220 kV<br />\
    <img src="styles/legend/Trmbinp_13_2.png" /> 500 kV<br />'
        });
var format_ngdytiin_14 = new ol.format.GeoJSON();
var features_ngdytiin_14 = format_ngdytiin_14.readFeatures(json_ngdytiin_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ngdytiin_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ngdytiin_14.addFeatures(features_ngdytiin_14);
var lyr_ngdytiin_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ngdytiin_14, 
                style: style_ngdytiin_14,
                interactive: true,
    title: 'Đường dây tải điện<br />\
    <img src="styles/legend/ngdytiin_14_0.png" /> 110 kV<br />\
    <img src="styles/legend/ngdytiin_14_1.png" /> 220 kV<br />\
    <img src="styles/legend/ngdytiin_14_2.png" /> 500 kV<br />'
        });
var format_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15 = new ol.format.GeoJSON();
var features_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15 = format_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15.readFeatures(json_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15.addFeatures(features_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15);
var lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15, 
                style: style_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15,
                interactive: true,
                title: '<img src="styles/legend/KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15.png" /> Khu bảo tồn (Nguồn: https://www.protectedplanet.net/country/VNM)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Khuvcnghincu_1.setVisible(true);lyr_MthotnghnghituynthngNgunhttpswwwmarinetrafficcom_2.setVisible(true);lyr_Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_3.setVisible(true);lyr_Mtgiticao100mWm2Ngunhttpsglobalwindatlasinfo_4.setVisible(true);lyr_ahnhymNgunhttpswwwgebconet_5.setVisible(true);lyr_KtquKhnngkhuvctimnng_6.setVisible(true);lyr_Khuvcrabinkimn_7.setVisible(true);lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8.setVisible(true);lyr_NgtrngcamtsnghcNgunVinNghincuHisn_9.setVisible(true);lyr_Cngbin_10.setVisible(true);lyr_Ccmdukh_11.setVisible(true);lyr_Ccngngdnduvtlin_12.setVisible(true);lyr_Trmbinp_13.setVisible(true);lyr_ngdytiin_14.setVisible(true);lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Khuvcnghincu_1,lyr_MthotnghnghituynthngNgunhttpswwwmarinetrafficcom_2,lyr_Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_3,lyr_Mtgiticao100mWm2Ngunhttpsglobalwindatlasinfo_4,lyr_ahnhymNgunhttpswwwgebconet_5,lyr_KtquKhnngkhuvctimnng_6,lyr_Khuvcrabinkimn_7,lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8,lyr_NgtrngcamtsnghcNgunVinNghincuHisn_9,lyr_Cngbin_10,lyr_Ccmdukh_11,lyr_Ccngngdnduvtlin_12,lyr_Trmbinp_13,lyr_ngdytiin_14,lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15];
lyr_Khuvcnghincu_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Khuvcrabinkimn_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'rua': 'rua', 'X': 'X', 'Y': 'Y', });
lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'SOURCE': 'SOURCE', 'Shape_Leng': 'Shape_Leng', });
lyr_NgtrngcamtsnghcNgunVinNghincuHisn_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ngheca': 'Ngheca', 'X': 'X', 'Y': 'Y', });
lyr_Cngbin_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PORT_NAME': 'PORT_NAME', 'COUNTRY': 'COUNTRY', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Ccmdukh_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Mo': 'Mo', 'X': 'X', 'Y': 'Y', });
lyr_Ccngngdnduvtlin_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_Trmbinp_13.set('fieldAliases', {'Id': 'Id', 'Voltage': 'Voltage', 'X': 'X', 'Y': 'Y', });
lyr_ngdytiin_14.set('fieldAliases', {'Id': 'Id', 'Voltage': 'Voltage', 'Start_X': 'Start_X', 'End_X': 'End_X', 'End_Y': 'End_Y', 'Start_Y': 'Start_Y', });
lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15.set('fieldAliases', {'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', });
lyr_Khuvcnghincu_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Khuvcrabinkimn_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'rua': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'TYPE': 'TextEdit', 'STATUS': 'TextEdit', 'SOURCE': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_NgtrngcamtsnghcNgunVinNghincuHisn_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ngheca': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Cngbin_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'PORT_NAME': 'TextEdit', 'COUNTRY': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Ccmdukh_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Mo': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Ccngngdnduvtlin_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Trmbinp_13.set('fieldImages', {'Id': 'Range', 'Voltage': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ngdytiin_14.set('fieldImages', {'Id': 'Range', 'Voltage': 'Range', 'Start_X': 'TextEdit', 'End_X': 'TextEdit', 'End_Y': 'TextEdit', 'Start_Y': 'TextEdit', });
lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15.set('fieldImages', {'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'Range', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'Range', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'SUPP_INFO': 'TextEdit', 'CONS_OBJ': 'TextEdit', });
lyr_Khuvcnghincu_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Khuvcrabinkimn_7.set('fieldLabels', {'OBJECTID': 'no label', 'rua': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_8.set('fieldLabels', {'OBJECTID': 'no label', 'TYPE': 'no label', 'STATUS': 'no label', 'SOURCE': 'no label', 'Shape_Leng': 'no label', });
lyr_NgtrngcamtsnghcNgunVinNghincuHisn_9.set('fieldLabels', {'OBJECTID': 'no label', 'Ngheca': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Cngbin_10.set('fieldLabels', {'OBJECTID': 'no label', 'PORT_NAME': 'no label', 'COUNTRY': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_Ccmdukh_11.set('fieldLabels', {'OBJECTID': 'no label', 'Mo': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Ccngngdnduvtlin_12.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', });
lyr_Trmbinp_13.set('fieldLabels', {'Id': 'no label', 'Voltage': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_ngdytiin_14.set('fieldLabels', {'Id': 'no label', 'Voltage': 'no label', 'Start_X': 'no label', 'End_X': 'no label', 'End_Y': 'no label', 'Start_Y': 'no label', });
lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15.set('fieldLabels', {'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', });
lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});