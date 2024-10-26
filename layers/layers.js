ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([273389.455414, 2114976.662840, 275253.217369, 2115871.146464]);
var wms_layers = [];

var format_LandUse_0 = new ol.format.GeoJSON();
var features_LandUse_0 = format_LandUse_0.readFeatures(json_LandUse_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_LandUse_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandUse_0.addFeatures(features_LandUse_0);
var lyr_LandUse_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandUse_0, 
                style: style_LandUse_0,
                popuplayertitle: "LandUse",
                interactive: false,
    title: 'LandUse<br />\
    <img src="styles/legend/LandUse_0_0.png" /> Residential<br />\
    <img src="styles/legend/LandUse_0_1.png" /> <br />\
    <img src="styles/legend/LandUse_0_2.png" /> <br />\
    <img src="styles/legend/LandUse_0_3.png" /> Slum Cluster<br />\
    <img src="styles/legend/LandUse_0_4.png" /> Open Space<br />\
    <img src="styles/legend/LandUse_0_5.png" /> Commercial<br />\
    <img src="styles/legend/LandUse_0_6.png" /> Public Utility and Facility<br />\
    <img src="styles/legend/LandUse_0_7.png" /> Municipal Office<br />\
    <img src="styles/legend/LandUse_0_8.png" /> Under Construction<br />\
    <img src="styles/legend/LandUse_0_9.png" /> Social Amenities<br />\
    <img src="styles/legend/LandUse_0_10.png" /> Educational Amenities<br />\
    <img src="styles/legend/LandUse_0_11.png" /> Government Office<br />\
    <img src="styles/legend/LandUse_0_12.png" /> Law & Order<br />\
    <img src="styles/legend/LandUse_0_13.png" /> Other Offices<br />\
    <img src="styles/legend/LandUse_0_14.png" /> Vacant Land<br />\
    <img src="styles/legend/LandUse_0_15.png" /> Medical Amenities<br />'
        });
var format_BuildingFootprints_1 = new ol.format.GeoJSON();
var features_BuildingFootprints_1 = format_BuildingFootprints_1.readFeatures(json_BuildingFootprints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_BuildingFootprints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingFootprints_1.addFeatures(features_BuildingFootprints_1);
var lyr_BuildingFootprints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingFootprints_1, 
                style: style_BuildingFootprints_1,
                popuplayertitle: "Building Footprints",
                interactive: true,
                title: '<img src="styles/legend/BuildingFootprints_1.png" /> Building Footprints'
            });

lyr_LandUse_0.setVisible(true);lyr_BuildingFootprints_1.setVisible(true);
var layersList = [lyr_LandUse_0,lyr_BuildingFootprints_1];
lyr_LandUse_0.set('fieldAliases', {'id': 'id', 'CTS Number': 'CTS Number', 'Gaothan ?': 'Gaothan ?', 'LU-DP\'67': 'LU-DP\'67', 'LU-DP\'81': 'LU-DP\'81', 'LU-ELU\'14': 'LU-ELU\'14', 'LU-DP\'1634': 'LU-DP\'1634', 'LU-OnSite': 'LU-OnSite', });
lyr_BuildingFootprints_1.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'Height of building (in no. of storeys)', 'BLDG_COND': 'Condition of building', 'BLDG_USE': 'Current use of building', 'HERITAGE': 'Is it a classified heritage building ?', 'GRADE': 'Heritage grade of the building ', 'AGE': 'Age of the building in decades', 'REDEV': 'Has the building undergone redevelopment ?', 'OCCUPIED': 'Occupied or not ? (Y/N)', 'ROOF_TYPE': 'Type of roof ', 'MODIF': 'Has the building undergone modifications ?', 'NUMBER_FAM': 'Number of families occupying the building', 'NUMBER_SHO': 'Number of shops in the building', 'SEMIPUBLIC': 'Does the building have a semi-public interface ? (verandah, balcao, etc)', 'BLDG_OWNER': 'Ownership of the building', 'COMMUNITY': 'Community occupying the building', 'REMARKS': 'Remarks', });
lyr_LandUse_0.set('fieldImages', {'id': 'TextEdit', 'CTS Number': 'TextEdit', 'Gaothan ?': 'TextEdit', 'LU-DP\'67': 'TextEdit', 'LU-DP\'81': 'TextEdit', 'LU-ELU\'14': 'TextEdit', 'LU-DP\'1634': 'TextEdit', 'LU-OnSite': 'TextEdit', });
lyr_BuildingFootprints_1.set('fieldImages', {'ID': '', 'BLDG_HT': '', 'BLDG_COND': '', 'BLDG_USE': '', 'HERITAGE': '', 'GRADE': '', 'AGE': '', 'REDEV': '', 'OCCUPIED': '', 'ROOF_TYPE': '', 'MODIF': '', 'NUMBER_FAM': '', 'NUMBER_SHO': '', 'SEMIPUBLIC': '', 'BLDG_OWNER': '', 'COMMUNITY': '', 'REMARKS': '', });
lyr_LandUse_0.set('fieldLabels', {'id': 'no label', 'CTS Number': 'no label', 'Gaothan ?': 'no label', 'LU-DP\'67': 'no label', 'LU-DP\'81': 'no label', 'LU-ELU\'14': 'no label', 'LU-DP\'1634': 'no label', 'LU-OnSite': 'no label', });
lyr_BuildingFootprints_1.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_BuildingFootprints_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});