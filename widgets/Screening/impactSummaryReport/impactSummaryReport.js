// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/impactSummaryReport/impactSummaryReport.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTImpactSummaryLayerContainer" data-dojo-attach-point\x3d"impactSummaryLayerContainer"\x3e\r\n    \x3c!--title \x26 field icon table--\x3e\r\n    \x3cdiv class\x3d"esriCTLayerTitleAndFieldParentContainer esriCTLayerSectionDisabled esriCTCursorPointer"\r\n      data-dojo-attach-point\x3d"layerTitleAndFieldParentContainer" tabindex\x3d"0" role\x3d"group"\x3e\r\n      \x3c!--title \x26 field icon row--\x3e\r\n      \x3cdiv class\x3d"esriCTLayerTitleAndFieldChildContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTLayerPanelIcon esriCTLayerPanelExpand" data-dojo-attach-point\x3d"layerSectionIcon" tabindex\x3d"-1"\r\n          role\x3d"button" aria-expanded\x3d"false" aria-label\x3d"${nls.reportsTab.expandCollapseIconLabel}"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--title--\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerTitle" data-dojo-attach-point\x3d"impactSummaryLayerTitle"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--field icon--\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerFieldIcon esriCTImpactSummaryLayerFieldIconDisabled"\r\n          data-dojo-attach-point\x3d"impactSummaryLayerField" title\x3d"${nls.reportsTab.attributeChooserTooltip}"\r\n          tabindex\x3d"-1" aria-label\x3d"${nls.reportsTab.attributeChooserTooltip}" role\x3d"button"\x3e\x3c/div\x3e\r\n        \x3c!--feature count--\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerFeatureCount esriCTLoadingIcon"\r\n          data-dojo-attach-point\x3d"impactSummaryLayerFeatureCount"\x3e\x3c/div\x3e\r\n        \x3c!-- Hint for count exceeding max record count --\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerMaxRecordHint esriCTHidden" title\x3d"${nls.reportsTab.unableToAnalyzeText}"\r\n          data-dojo-attach-point\x3d"impactSummaryLayerMaxRecordHint" tabindex\x3d"-1" role\x3d"button"\r\n          aria-label\x3d"${nls.reportsTab.unableToAnalyzeText}"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--layer description--\x3e\r\n    \x3cdiv class\x3d"esriCTImpactSummaryLayerDetailContainer esriCTHidden"\r\n      data-dojo-attach-point\x3d"impactSummaryLayerDetailContainer"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"impactSummaryLayerDetailsMsg" class\x3d"esriCTImpactSummaryLayerDetailsMsg"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"impactSummaryLayerDetails" class\x3d"esriCTImpactSummaryLayerDetails"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"noFieldsSelectedContainer" class\x3d"esriCTNoFieldSelectedContainer esriCTHidden"\x3e\r\n        ${nls.reportsTab.noFieldsSelected}\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./impactSummaryReport.html dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/array dojo/Evented jimu/BaseWidget dojo/on dojo/dom-class dojo/dom-attr esri/geometry/geometryEngine esri/geometry/Polyline esri/SpatialReference esri/graphic dojo/dom-construct esri/tasks/query esri/tasks/QueryTask dojo/Deferred ../geometryUtils ../conversionUtils ../highlightSymbolUtils ../fieldSelectorPopup/fieldSelectorPopup esri/lang jimu/utils dojo/query dojo/number dojo/string dojo/promise/all dojo/keys dijit/focus dojo/_base/event".split(" "),
function(F,G,H,g,l,I,J,n,h,m,t,K,L,y,r,B,C,w,D,M,N,O,P,q,E,v,Q,R,p,x,u){return F([J,H,I],{baseClass:"jimu-widget-screening-impactSummaryReport",templateString:G,_feetUnitData:[],_squareFeetUnitData:[],_milesUnitData:[],_acresUnitData:[],_metersUnitData:[],_squareMetersUnitData:[],_kilometersUnitData:[],_squareKilometersUnitData:[],_squareMilesUnitData:[],_hectaresUnitData:[],_printCompleteData:{},_printData:{},_feetUnitInfo:[],_squareFeetUnitInfo:[],_countUnitInfo:[],_milesUnitInfo:[],_acresUnitInfo:[],
_metersUnitInfo:[],_squareMetersUnitInfo:[],_kilometersUnitInfo:[],_squareKilometersUnitInfo:[],_hectaresUnitInfo:[],_squareMilesUnitInfo:[],_intersectFeatureCount:0,isExceedingMaxRecordCount:!1,intersectingFeatureIdsToTolerance:[],intersectingFeatureIds:[],_lengthAnalysisUnitsArray:[],_areaAnalysisUnitsArray:[],_aggregatedFeatureGeometries:[],_featureIntersectResultArr:[],_layerDefinition:null,_isFieldsSelectorClick:!1,_selectedFields:[],constructor:function(b){this._feetUnitData=[];this._squareFeetUnitData=
[];this._milesUnitData=[];this._acresUnitData=[];this._metersUnitData=[];this._squareMetersUnitData=[];this._kilometersUnitData=[];this._squareKilometersUnitData=[];this._squareMilesUnitData=[];this._hectaresUnitData=[];this._printCompleteData={};this._printData={};this._feetUnitInfo=[];this._squareFeetUnitInfo=[];this._countUnitInfo=[];this._milesUnitInfo=[];this._acresUnitInfo=[];this._metersUnitInfo=[];this._squareMetersUnitInfo=[];this._kilometersUnitInfo=[];this._squareKilometersUnitInfo=[];
this._hectaresUnitInfo=[];this._squareMilesUnitInfo=[];this._intersectFeatureCount=0;this.isExceedingMaxRecordCount=!1;this.intersectingFeatureIdsToTolerance=[];this.intersectingFeatureIds=[];this._lengthAnalysisUnitsArray=[];this._areaAnalysisUnitsArray=[];this._aggregatedFeatureGeometries=[];this._featureIntersectResultArr=[];this._layerDefinition=null;this._isFieldsSelectorClick=!1;this._selectedFields=[];g.mixin(this,b)},postCreate:function(){this._layerDefinition=q.getFeatureLayerDefinition(this.featureLayer);
this._lengthAnalysisUnitsArray=["Feet","Miles","Meters","Kilometers"];this._areaAnalysisUnitsArray="SquareFeet Acres SquareMeters SquareKilometers Hectares SquareMiles".split(" ");this.own(n(this.impactSummaryLayerMaxRecordHint,"click",g.hitch(this,function(b){b.stopPropagation();b.preventDefault();this.isExceedingMaxRecordCount?this.emit("showMessage",this.nls.reportsTab.unableToAnalyzeText):this.emit("showMessage",this.nls.reportsTab.layerNotVisibleText)})));this._attachEventToNodes()},_displayLayerNotVisibleText:function(){h.add(this.impactSummaryLayerFeatureCount,
"esriCTHidden");h.remove(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled");m.set(this.impactSummaryLayerMaxRecordHint,"title",this.nls.reportsTab.layerNotVisibleText);h.remove(this.impactSummaryLayerMaxRecordHint,"esriCTHidden");h.add(this.impactSummaryLayerTitle,"esriCTLayerTitleOverrideWidth");this._showMessage(this.nls.reportsTab.layerNotVisibleText)},generateReport:function(b,a,c){var d,f,e;d=new w;this._setAttributeToFeatureLayerContainer();this._setFeatureLayerTitle();this._attachEventToLayerTitle();
this._aggregatedFeatureGeometries=[];this._featureIntersectResultArr=[];(e=this.layerInfosObj.getLayerInfoById(this.featureLayer.id))&&e.isVisible()&&e.isInScale()||e&&!e.isVisible()&&!this.config.allowVisibleLayerAnalysisOnly||e&&!e.isInScale()&&!this.config.allowVisibleLayerAnalysisOnly||this.isFeatureCollectionLayer?this._getIntersectingFeaturesCount(c).then(g.hitch(this,function(c){this._getIntersectingFeaturesCount(a).then(g.hitch(this,function(e){this.intersectingFeatureIdsToTolerance=this._getUniqueIds(c,
e);this._getIntersectingFeaturesCount(b).then(g.hitch(this,function(c){var k;this.intersectingFeatureIds=g.clone(c);c=this._getUniqueIds(e,c);this.isExceedingMaxRecordCount?(this._setFeatureLayerIntersectFeatureCount(c.length),this._pushDataInPrintDataObj(this.configuredLayerLabel,null,null),this._printData={},this._printData=g.clone(this._printCompleteData),this._showMessage(this.nls.reportsTab.unableToAnalyzeText),h.remove(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled"),this._showReport(),
d.resolve(this._getReportLayerDetails([]))):(k=b||a,this._getFeatureByChunks(c,k).then(g.hitch(this,function(a){var c;c=[];this._featureIntersectResultArr=[];l.forEach(a,g.hitch(this,function(a){b&&t.touches(a.geometry,b)||c.push(a)}));a=[];this._setFeatureLayerIntersectFeatureCount(c.length);0<c.length?("esriGeometryPolyline"!==this.featureLayer.geometryType&&"esriGeometryPolygon"!==this.featureLayer.geometryType||!b?a=c:(f=this._polygonToPolyline(b),a=this._getCutOrWithInFeatures(f,c,b)),this._createLayerDetails(a,
this.featureLayer.geometryType),this._filterPrintDataObjAccToConfiguredFields(this.configuredField),h.remove(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")):(this._pushDataInPrintDataObj(this.configuredLayerLabel,null,null),this._printData={},this._printData=g.clone(this._printCompleteData),this._showMessage(this.nls.reportsTab.noDetailsAvailableText));h.remove(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled");this._featureIntersectResultArr=a;this._showReport();
d.resolve(this._getReportLayerDetails(a))})))}))}))})):(this._displayLayerNotVisibleText(),d.resolve());return d.promise},retainLastSelectedField:function(){null!==this.retainSelectedFieldsArr&&(this._selectedFields=this.retainSelectedFieldsArr,h.contains(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")||this._filterFieldsForReport(this.retainSelectedFieldsArr))},_getReportLayerDetails:function(b){var a={};a.id=this.id;a.featureLayerId=this.featureLayer.id;a.features=b;a.printInfo=
{};a.printInfo.isExceedingMaxRecordCount=this.isExceedingMaxRecordCount;a.printInfo.featureCount=this._intersectFeatureCount;a.printInfo.info=this._printData;a.printInfo.feetUnitInfo=this._feetUnitInfo;a.printInfo.squareFeetUnitInfo=this._squareFeetUnitInfo;a.printInfo.countUnitInfo=this._countUnitInfo;a.printInfo.milesUnitInfo=this._milesUnitInfo;a.printInfo.acresUnitInfo=this._acresUnitInfo;a.printInfo.metersUnitInfo=this._metersUnitInfo;a.printInfo.squareMetersUnitInfo=this._squareMetersUnitInfo;
a.printInfo.kilometersUnitInfo=this._kilometersUnitInfo;a.printInfo.squareKilometersUnitInfo=this._squareKilometersUnitInfo;a.printInfo.squareMilesUnitInfo=this._squareMilesUnitInfo;a.printInfo.hectaresUnitInfo=this._hectaresUnitInfo;a.printInfo.geometryType=this.featureLayer.geometryType;a.printInfo.groupbyfieldCheckBoxStatus=this.groupbyfieldCheckBoxStatus;return a},_setAttributeToFeatureLayerContainer:function(){m.set(this.impactSummaryLayerContainer,"featureLayerID",this.featureLayer.id)},_setFeatureLayerTitle:function(b){var a=
this.configuredLayerLabel;this.configuredLayerLabel||(a=this.configuredLayerLabel=this.featureLayer.name);if(b||0===b)a=Q.substitute(this.nls.reportsTab.layerNameWithFeatureCount,{layerName:this.configuredLayerLabel,featureCount:b});m.set(this.impactSummaryLayerTitle,"innerHTML",q.sanitizeHTML(this.configuredLayerLabel));m.set(this.impactSummaryLayerTitle,"title",q.sanitizeHTML(this.configuredLayerLabel));m.set(this.layerTitleAndFieldParentContainer,"aria-label",a)},_attachEventToLayerTitle:function(){this.own(n(this.layerTitleAndFieldParentContainer,
"click",g.hitch(this,function(b){h.contains(b.target,"esriCTImpactSummaryLayerFieldIcon")?h.contains(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")||this._createFieldSelectorPopupWidget():h.contains(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled")||this._showOrHideLayerDetailsContainer()})))},_createFieldSelectorPopupWidget:function(){this._isFieldsSelectorClick=!0;if(this._fieldSelectorWidget)this._fieldSelectorWidget.onFieldsSelectorClick();else this._fieldSelectorWidget=
new O({outFields:this.configuredField,popupTitle:this.configuredLayerLabel,fieldTitle:this.nls.reportsTab.selectReportFieldTitle,nls:this.nls,appConfig:this.appConfig,retainSelectedFieldsArr:this.retainSelectedFieldsArr}),n(this._fieldSelectorWidget,"onFieldSelectComplete",g.hitch(this,function(b){this._selectedFields=b;this._filterFieldsForReport(b)})),n(this._fieldSelectorWidget,"onCancel",g.hitch(this,function(){this._selectedFields=null!==this.retainSelectedFieldsArr?this.retainSelectedFieldsArr:
this._getAllFields()})),n(this._fieldSelectorWidget,"onClose",g.hitch(this,function(){this._selectedFields=null!==this.retainSelectedFieldsArr?this.retainSelectedFieldsArr:this._getAllFields()})),this._fieldSelectorWidget.startup();"DartTheme"===this.appConfig.theme.name&&h.add(this._fieldSelectorWidget.fieldsPopup.domNode,"esriCTDartPanel")},_getAllFields:function(){var b,a;a=[];for(b in this.configuredField)this.configuredField.hasOwnProperty(b)&&(this.configuredField[b].hasOwnProperty("fieldName")&&
a.push(this.configuredField[b].fieldName),this.configuredField[b].hasOwnProperty("name")&&a.push(this.configuredField[b].name));return a},getSelectedFields:function(){return h.contains(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")?0<this._selectedFields.length?this._selectedFields:0===this._selectedFields.length&&null===this.retainSelectedFieldsArr?this._getAllFields():0===this._selectedFields.length&&0===this.retainSelectedFieldsArr.length?[]:this._getAllFields():this._isFieldsSelectorClick&&
0<this._selectedFields.length?this._selectedFields:this._isFieldsSelectorClick&&0===this._selectedFields.length?[]:!this._isFieldsSelectorClick&&0<this._selectedFields.length?this._selectedFields:this._isFieldsSelectorClick||0!==this._selectedFields.length||null!==this.retainSelectedFieldsArr?this._isFieldsSelectorClick||0!==this._selectedFields.length||0!==this.retainSelectedFieldsArr.length?this._getAllFields():[]:this._getAllFields()},_filterFieldsForReport:function(b){var a=g.clone(this.configuredField),
c;for(c in this.configuredField)-1>=b.indexOf(c)&&delete a[c];this._filterPrintDataObjAccToConfiguredFields(a);(b=E(".esriCTAttrTableHighlighted",this.domNode.parentElement))&&0<b.length&&m.get(b[0],"esriCTLayerId")===this.featureLayer.id&&(h.remove(b[0],"esriCTAttrTableHighlighted"),this.highlightGraphicsLayer.clear());this._showReport();this.emit("printDataUpdated",{id:this.id,printData:this._printData})},_showOrHideLayerDetailsContainer:function(){h.toggle(this.layerTitleAndFieldParentContainer,
"esriCTBoldFont");h.toggle(this.impactSummaryLayerDetailContainer,"esriCTHidden");h.contains(this.layerSectionIcon,"esriCTLayerPanelExpand")?(h.replace(this.layerSectionIcon,"esriCTLayerPanelCollapse","esriCTLayerPanelExpand"),m.set(this.layerSectionIcon,"aria-expanded","true")):(h.replace(this.layerSectionIcon,"esriCTLayerPanelExpand","esriCTLayerPanelCollapse"),m.set(this.layerSectionIcon,"aria-expanded","false"))},_getIntersectingFeaturesCount:function(b){var a,c,d,f;a=new w;if(b)if(this.isFeatureCollectionLayer){c=
[];if(0<this.featureLayer.graphics.length)for(f=0;f<this.featureLayer.graphics.length;f++)(d=this.featureLayer.graphics[f].geometry?t.intersects(b,this.featureLayer.graphics[f].geometry):null)&&c.push(f);a.resolve(c)}else{var e;c=new B;d=new C(this.featureLayer.url);(e=this.layerInfosObj.getLayerInfoById(this.featureLayer.id))&&(f=e.getFilter()?e.getFilter():"1\x3d1");f&&(c.where=f);c.geometry=b;d.executeForIds(c,g.hitch(this,function(b){b&&0!==b.length?(b.length>this.maxFeaturesForAnalysis&&(h.remove(this.impactSummaryLayerMaxRecordHint,
"esriCTHidden"),h.add(this.impactSummaryLayerTitle,"esriCTLayerTitleOverrideWidth"),this.isExceedingMaxRecordCount=!0,this.emit("exceedingMaxRecordCount")),a.resolve(b)):a.resolve([])}),g.hitch(this,function(){a.resolve([])}))}else a.resolve([]);return a.promise},_getFeatureByChunks:function(b,a){var c,d,f;d=new w;c=[];f=this.featureLayer.maxRecordCount;if(this.isFeatureCollectionLayer)c.push(this._getIntersectFeature(b,a));else for(;0<b.length;)c.push(this._getIntersectFeature(b.splice(0,f),a));
R(c).then(g.hitch(this,function(a){var b;b=[];l.forEach(a,g.hitch(this,function(a){b=b.concat(a)}));d.resolve(b)}));return d.promise},_getIntersectFeature:function(b,a){var c,d,f;c=new w;if(this.isFeatureCollectionLayer){d=[];if(0<this.featureLayer.graphics.length)for(b=0;b<this.featureLayer.graphics.length;b++)(f=this.featureLayer.graphics[b].geometry?t.intersects(a,this.featureLayer.graphics[b].geometry):null)&&d.push(this.featureLayer.graphics[b]);c.resolve(d.splice(0,this.maxFeaturesForAnalysis))}else d=
new B,d.outFields=["*"],d.returnGeometry=!0,d.objectIds=b,d.outSpatialReference=a.spatialReference,a=new C(this.featureLayer.url),a.execute(d,g.hitch(this,function(a){a.features?c.resolve(a.features):c.resolve([])}),g.hitch(this,function(){c.resolve([])}));return c.promise},_setFeatureLayerIntersectFeatureCount:function(b){this._intersectFeatureCount=v.format(b);h.remove(this.impactSummaryLayerFeatureCount,"esriCTLoadingIcon");m.set(this.impactSummaryLayerFeatureCount,"innerHTML","("+this._intersectFeatureCount+
")");m.set(this.impactSummaryLayerFeatureCount,"title","("+this._intersectFeatureCount+")");this._setFeatureLayerTitle(b)},_isDonutPolygon:function(b){var a;a=!1;"polygon"===b.type&&1<b.rings.length&&l.forEach(b.rings,g.hitch(this,function(c){b.isClockwise(c)||(a=!0)}));return a},_getCutOrWithInFeatures:function(b,a,c){var d,f;d=[];for(var e=0;e<b.length;e++)for(var k=0;k<a.length;k++)f=t.cut(a[k].geometry,b[e]),0<f.length?d=this._getWithinFeature({cutFeatureArr:f,bufferGeometry:c,featureIntersectResultArr:d,
intersectFeatureArr:a,index:k}):(t.within(a[k].geometry,c)?f=new y(a[k].geometry,null,a[k].attributes):(f=t.intersect(a[k].geometry,c),f=new y(f,null,a[k].attributes,null)),d.push(f));return d},_getWithinFeature:function(b){var a,c,d,f,e,k;a=b.cutFeatureArr;c=b.bufferGeometry;d=b.intersectFeatureArr;e=b.featureIntersectResultArr;f=b.index;l.forEach(a,g.hitch(this,function(a){t.within(a,c)&&(k=new y(a,null,d[f].attributes),e.push(k))}));return e},_polygonToPolyline:function(b){var a,c,d,f,e;a=[];c=
new K(new L({wkid:102100}));for(e=0;e<b.rings.length;e++){f=[];for(d=0;d<b.rings[e].length;d++)f.push(b.rings[e][d]);c.addPath(f)}a.push(c);return a},_updateFormattedAttribute:function(b){l.forEach(b,g.hitch(this,function(a,c){var d,f,e;d=a.attributes[this.featureLayer.objectIdField];e=null;-1===this.intersectingFeatureIds.indexOf(d)&&(f=!0);this.isFeatureCollectionLayer||(d=this.layerInfosObj.getLayerInfoById(this.featureLayer.id),e=d.originOperLayer.popupInfo);d=this._getFormatedAttrs(g.clone(a.attributes),
this.featureLayer.fields,e);b[c].setAttributes(d);l.forEach(this.featureLayer.fields,g.hitch(this,function(a){var d;b[c].attributes.hasOwnProperty(a.name)||(b[c].attributes[a.name]=this.nls.reportsTab.noDataText);b[c].attributes.hasOwnProperty(a.name)&&(d=b[c].attributes[a.name],void 0===d||""===d||null===d?b[c].attributes[a.name]=this.nls.reportsTab.noDataText:""===g.trim(d.toString())&&(b[c].attributes[a.name]=this.nls.reportsTab.noDataText))}));if(f&&"esriGeometryPolygon"===this.featureLayer.geometryType)this._squareFeetUnitData.push(0),
this._acresUnitData.push(0),this._squareMetersUnitData.push(0),this._squareKilometersUnitData.push(0),this._squareMilesUnitData.push(0),this._hectaresUnitData.push(0);else if(f&&"esriGeometryPolyline"===this.featureLayer.geometryType)this._feetUnitData.push(0),this._milesUnitData.push(0),this._metersUnitData.push(0),this._kilometersUnitData.push(0);else switch(this.featureLayer.geometryType){case "esriGeometryPolygon":a=D.getAreaOfGeometry(a.geometry);this._squareFeetUnitData.push(a.squareFeet);this._acresUnitData.push(a.acres);
this._squareMetersUnitData.push(a.squareMeters);this._squareKilometersUnitData.push(a.squareKilometer);this._squareMilesUnitData.push(a.squareMiles);this._hectaresUnitData.push(a.hectares);break;case "esriGeometryPolyline":a=D.getLengthOfGeometry(a.geometry),this._feetUnitData.push(a.feet),this._milesUnitData.push(a.miles),this._metersUnitData.push(a.meters),this._kilometersUnitData.push(a.kilometers)}}));return b},_getFieldText:function(b,a){return b.label?b.label:b.alias?b.alias:a},_createLayerDetails:function(b,
a){var c,d,f,e;e=Object.keys(this.configuredField).length;b=this._updateFormattedAttribute(b);this._pushDataInPrintDataObj(this.configuredLayerLabel,null,null);for(f in this.configuredField)for(c=this.configuredField[f],c=this._getFieldText(c,f),this._printCompleteData.cols.push(c),c=0;c<b.length;c++)switch((d=b[c].attributes[f])||0===d?this._pushDataInPrintDataObj(null,c,d):this._pushDataInPrintDataObj(null,c,""),a){case "esriGeometryPolyline":this._printCompleteData.cols.length===e&&(this._feetUnitInfo.push(this._feetUnitData[c]),
this._milesUnitInfo.push(this._milesUnitData[c]),this._metersUnitInfo.push(this._metersUnitData[c]),this._kilometersUnitInfo.push(this._kilometersUnitData[c]));break;case "esriGeometryPolygon":this._printCompleteData.cols.length===e&&(this._squareFeetUnitInfo.push(this._squareFeetUnitData[c]),this._acresUnitInfo.push(this._acresUnitData[c]),this._squareMetersUnitInfo.push(this._squareMetersUnitData[c]),this._squareKilometersUnitInfo.push(this._squareKilometersUnitData[c]),this._squareMilesUnitInfo.push(this._squareMilesUnitData[c]),
this._hectaresUnitInfo.push(this._hectaresUnitData[c]));break;case "esriGeometryPoint":this._printCompleteData.cols.length===e&&this._countUnitInfo.push(1)}},_pushDataInPrintDataObj:function(b,a,c){b?(this._printCompleteData={},this._feetUnitInfo=[],this._squareFeetUnitInfo=[],this._countUnitInfo=[],this._milesUnitInfo=[],this._acresUnitInfo=[],this._metersUnitInfo=[],this._squareMetersUnitInfo=[],this._kilometersUnitInfo=[],this.squareKilometersUnitInfo=[],this.squareMilesUnitInfo=[],this._hectaresUnitInfo=
[],this._printCompleteData.title=b,this._printCompleteData.rows=[],this._printCompleteData.cols=[]):(c===this.nls.reportsTab.noDataText&&(c="\x3ci\x3e"+c+"\x3c/i\x3e"),this._printCompleteData.rows[a]||this._printCompleteData.rows.push([]),this._printCompleteData.rows[a].push(c))},_filterPrintDataObjAccToConfiguredFields:function(b){var a,c,d;this._printData={};this._printData=g.clone(this._printCompleteData);for(a=this._printData.cols.length-1;0<=a;--a){c=!1;for(d in b)switch(this._printData.cols[a]){case b[d].label:c=
!0;break;case b[d].alias:c=!0;break;case d:c=!0}if(!c)for(this._printData.cols.splice(a,1),c=0;c<this._printData.rows.length;c++)this._printData.rows[c].splice(a,1)}},_getFormatedAttrs:function(b,a,c){function d(a){if(c&&P.isDefined(c.fieldInfos))for(var b=0,d=c.fieldInfos.length;b<d;b++){var e=c.fieldInfos[b];if(e.fieldName===a)return e.format}return null}var f=[null,void 0,""],e={};l.forEach(a,g.hitch(this,function(c,h){if(-1===f.indexOf(b[c.name])){var g="esriFieldTypeDate"===c.type,k=c.name;if("esriFieldTypeDate"===
a[h].type)e[k]=q.fieldFormatter.getFormattedDate(b[c.name],d(c.name));else if("esriFieldTypeDouble"===a[h].type||"esriFieldTypeSingle"===a[h].type||"esriFieldTypeInteger"===a[h].type||"esriFieldTypeSmallInteger"===a[h].type)e[k]=this._getFormattedNumber(b[c.name],d(c.name));g||(e[k]=k in e?e[k]:b[c.name],(c=q.getDisplayValueForCodedValueOrSubtype(this._layerDefinition,c.name,b))&&c.isCodedValueOrSubtype&&c.hasOwnProperty("displayValue")&&-1===f.indexOf(c.displayValue)&&(c=c.displayValue,e[k]=c||isFinite(c)?
c:""))}}));return e},_getFormattedNumber:function(b,a){if("number"===typeof b){var c=(b.toString().split(".")[1]||"").length;return(b=q.localizeNumberByFieldInfo(b,{format:{places:a&&"number"===typeof a.places?parseInt(a.places,10):c,digitSeparator:a&&a.digitSeparator}}))||""}return b},_getArrayIndex:function(b,a){var c,d,f,e=[];for(c=0;c<b.length;++c)if(a.length===b[c].length){f=b[c];for(d=0;d<a.length&&a[d]===f[d];)++d;d===a.length&&e.push(c)}return e},getSum:function(b,a){b=(a&&0<a.length?l.filter(b,
function(b,d){return-1<a.indexOf(d)}):b).reduce(function(a,b){return a+b},0);return.01<b?M.honourPopupRounding(2,b):b},_getAggregatedColTitle:function(b){var a;switch(b){case "esriGeometryPoint":a=this.nls.reportsTab.featureCountText;break;case "esriGeometryPolyline":a=this.nls.reportsTab.featureLengthText;break;case "esriGeometryPolygon":a=this.nls.reportsTab.featureAreaText}return a},_getUnitsForGeometry:function(b,a){var c;switch(b){case "esriGeometryPoint":c="";break;case "esriGeometryPolyline":c=
this._getAnalysisUnitForGeometry(a,b);break;case "esriGeometryPolygon":c=this._getAnalysisUnitForGeometry(a,b)}return c},_getAnalysisUnitForGeometry:function(b,a){var c;switch(b){case "Feet":case "SquareFeet":c="esriGeometryPolygon"===a?this.nls.units.feetAbbr+"\x26sup2":this.nls.units.feetAbbr;break;case "Miles":case "Acres":c="esriGeometryPolygon"===a?this.nls.units.acresAbbr:this.nls.units.milesAbbr;break;case "Meters":case "SquareMeters":c="esriGeometryPolygon"===a?this.nls.units.metersAbbr+"\x26sup2":
this.nls.units.metersAbbr;break;case "Kilometers":case "SquareKilometers":c="esriGeometryPolygon"===a?this.nls.units.kilometersAbbr+"\x26sup2":this.nls.units.kilometersAbbr;break;case "Hectares":c="esriGeometryPolygon"===a?this.nls.reportsTab.hectaresAbbr:this.nls.units.kilometersAbbr;break;case "SquareMiles":c="esriGeometryPolygon"===a?this.nls.units.milesAbbr+"\x26sup2":this.nls.units.milesAbbr}return c},_showMessage:function(b){r.empty(this.impactSummaryLayerDetails);m.set(this.impactSummaryLayerDetailsMsg,
"innerHTML",b);h.add(this.impactSummaryLayerDetailsMsg,"esriCTLayerDetailCenterText")},_showReport:function(){var b,a,c,d,f,e,k=[];b=this._printData;r.empty(this.impactSummaryLayerDetails);if(!b.cols.length&&0<b.rows.length)this._showMessage(this.nls.reportsTab.noFieldsSelected);else if(b.rows&&0<b.rows.length){m.set(this.impactSummaryLayerDetailsMsg,"innerHTML","");h.remove(this.impactSummaryLayerDetailsMsg,"esriCTLayerDetailCenterText");a=[];d={};for(e=0;e<b.rows.length;e++)if(this.groupbyfieldCheckBoxStatus){if(0>
a.indexOf(e)&&(c=this._getArrayIndex(b.rows,b.rows[e]),d[e]=c,a=a.concat(c)),a.length===b.rows.length)break}else c=[],c.push(e),d[e]=c;a={rows:[],cols:g.clone(b.cols)};e=this._getAggregatedColTitle(this.featureLayer.geometryType);"esriGeometryPoint"===this.featureLayer.geometryType?a.cols.push(e):"esriGeometryPolyline"===this.featureLayer.geometryType?(a.cols.push(e),a.cols.push(e),a.cols.push(e),a.cols.push(e)):"esriGeometryPolygon"===this.featureLayer.geometryType&&(a.cols.push(e),a.cols.push(e),
a.cols.push(e),a.cols.push(e),a.cols.push(e),a.cols.push(e));for(f in d){e=g.clone(b.rows[parseInt(f,10)]);var z,A,l;"esriGeometryPolyline"===this.featureLayer.geometryType?(e.push(this.getSum(this._feetUnitInfo,d[parseInt(f,10)])),e.push(this.getSum(this._milesUnitInfo,d[parseInt(f,10)])),e.push(this.getSum(this._metersUnitInfo,d[parseInt(f,10)])),A=this.getSum(this._kilometersUnitInfo,d[parseInt(f,10)]),e.push(A)):"esriGeometryPolygon"===this.featureLayer.geometryType?(e.push(this.getSum(this._squareFeetUnitInfo,
d[parseInt(f,10)])),e.push(this.getSum(this._acresUnitInfo,d[parseInt(f,10)])),e.push(this.getSum(this._squareMetersUnitInfo,d[parseInt(f,10)])),e.push(this.getSum(this._squareKilometersUnitInfo,d[parseInt(f,10)])),z=this.getSum(this._hectaresUnitInfo,d[parseInt(f,10)]),e.push(z),e.push(this.getSum(this._squareMilesUnitInfo,d[parseInt(f,10)]))):"esriGeometryPoint"===this.featureLayer.geometryType&&(l=this.getSum(this._countUnitInfo,d[parseInt(f,10)]),e.push(l));a.rows.push(e);this._featureIntersectResultArr&&
("esriGeometryPolyline"===this.featureLayer.geometryType?k.push({features:this._getAggregatedFeatures(d[f]),sortValue:A}):"esriGeometryPolygon"===this.featureLayer.geometryType?k.push({features:this._getAggregatedFeatures(d[f]),sortValue:z}):"esriGeometryPoint"===this.featureLayer.geometryType&&k.push({features:this._getAggregatedFeatures(d[f]),sortValue:l}))}this._renderReport(a,k)}},_getAggregatedFeatures:function(b){var a=[];l.forEach(b,g.hitch(this,function(b){a.push(this._featureIntersectResultArr[b])}));
return a},_sortFeatureArray:function(b,a){var c=b.length-1;return b[c]<a[c]?1:b[c]>a[c]?-1:0},_sortArrayByKey:function(b,a){return b.sortValue<a.sortValue?1:b.sortValue>a.sortValue?-1:0},_createTemplateNode:function(){var b,a;a=r.create("div",{"class":"esriCTImpactSummaryLayerDetailMainNode",tabindex:0,role:"presentation"},this.impactSummaryLayerDetails);b=r.create("table",{"class":"esriCTAttrTable esriCTCursorPointer",cellpadding:"0px",cellspacing:"0px"},a);r.create("div",{"class":"esriCTInfoDataSeparator"},
this.impactSummaryLayerDetails);this.own(n(b,"click",g.hitch(this,function(a){this._highlightSelection(a.currentTarget)})));this.own(n(a,"keydown",g.hitch(this,function(a){a.keyCode!==p.ENTER&&a.keyCode!==p.SPACE||this._highlightSelection(a.currentTarget.children[0])})));return b},_renderReport:function(b,a){b.rows&&0<b.rows.length&&(b.rows=b.rows.sort(this._sortFeatureArray),this._aggregatedFeatureGeometries=a=a.sort(this._sortArrayByKey),l.forEach(b.rows,g.hitch(this,function(a,d){var c,e;c=this._createTemplateNode();
m.set(c,"esriCTTableIndex",d);m.set(c,"esriCTLayerId",this.featureLayer.id);l.forEach(a,g.hitch(this,function(d,f){var g,k,l,p;e=r.create("tr",{valign:"top"},c);p=r.create("td",{"class":"esriCTAttrName"},e);l=r.create("td",{"class":"esriCTAttrValue"},e);g=q.fieldFormatter.getFormattedUrl(d);d=b.cols[f]+": ";k=g;var n;switch(this.featureLayer.geometryType){case "esriGeometryPoint":n=1;break;case "esriGeometryPolyline":n=4;break;case "esriGeometryPolygon":n=6}if(f>=a.length-n){f-=a.length-n;.01<=g?
(g="esriGeometryPoint"!==this.featureLayer.geometryType?v.format(g,{places:2}):v.format(g),"esriGeometryPolyline"===this.featureLayer.geometryType?k=d+g+" "+this._getUnitsForGeometry(this.featureLayer.geometryType,this._lengthAnalysisUnitsArray[f]):"esriGeometryPolygon"===this.featureLayer.geometryType?k=d+g+" "+this._getUnitsForGeometry(this.featureLayer.geometryType,this._areaAnalysisUnitsArray[f]):"esriGeometryPoint"===this.featureLayer.geometryType&&(k=d+g+" "+this._getUnitsForGeometry(this.featureLayer.geometryType,
null))):.01>g&&0!==g?"esriGeometryPolyline"===this.featureLayer.geometryType?k=d+"  \x3c "+v.format(.01)+" "+this._getUnitsForGeometry(this.featureLayer.geometryType,this._lengthAnalysisUnitsArray[f]):"esriGeometryPolygon"===this.featureLayer.geometryType?k=d+"  \x3c "+v.format(.01)+" "+this._getUnitsForGeometry(this.featureLayer.geometryType,this._areaAnalysisUnitsArray[f]):"esriGeometryPoint"===this.featureLayer.geometryType&&(k=d+"  \x3c "+v.format(.01)+" "+this._getUnitsForGeometry(this.featureLayer.geometryType,
null)):k=d+" "+this.nls.reportsTab.notApplicableText;d="";h.add(p,"esriCTReportsTabInfoData");g="esriGeometryPolyline"===this.featureLayer.geometryType?"esriCTFieldDistinct"+this._lengthAnalysisUnitsArray[f]+"UnitData":"esriCTFieldDistinct"+this._areaAnalysisUnitsArray[f]+"UnitData";h.add(l,"esriCTInfoDataMeasurement esriCTReportsTabInfoData");if("esriGeometryPolyline"===this.featureLayer.geometryType){switch(this._lengthAnalysisUnitsArray[f]){case "Feet":case "Miles":case "Meters":case "Kilometers":h.add(l,
g),h.add(l,"esriCTEsriGeometryPolyline")}this.config.lengthUnits!==this._lengthAnalysisUnitsArray[f]&&h.add(l,"esriCTHidden")}if("esriGeometryPolygon"===this.featureLayer.geometryType){switch(this._areaAnalysisUnitsArray[f]){case "SquareFeet":case "Acres":case "SquareMeters":case "SquareKilometers":case "Hectares":case "SquareMiles":h.add(l,g),h.add(l,"esriCTEsriGeometryPolygon")}this.config.areaUnits!==this._areaAnalysisUnitsArray[f]&&h.add(l,"esriCTHidden")}}m.set(p,"innerHTML",d);m.set(l,"innerHTML",
k)}))})))},_getUniqueIds:function(b,a){if(0===b.length)return a;if(0===a.length)return b;l.forEach(b,g.hitch(this,function(b){b=a.indexOf(b);-1!==b&&a.splice(b,1)}));return b.concat(a)},_highlightSelection:function(b){var a;h.contains(b,"esriCTAttrTableHighlighted")?(h.remove(b,"esriCTAttrTableHighlighted"),this.highlightGraphicsLayer.clear()):((a=E(".esriCTAttrTableHighlighted",this.domNode.parentElement))&&0<a.length&&h.remove(a[0],"esriCTAttrTableHighlighted"),this.highlightGraphicsLayer.clear(),
h.add(b,"esriCTAttrTableHighlighted"),b=m.get(b,"esriCTTableIndex"),b=this._aggregatedFeatureGeometries[parseInt(b,10)].features,l.forEach(b,g.hitch(this,function(a){a=N.getHighLightSymbol(a,this.featureLayer);this.highlightGraphicsLayer.add(a)})))},_attachEventToNodes:function(){var b=this.own(n.pausable(this.layerTitleAndFieldParentContainer,"keydown",g.hitch(this,function(a){if(a.keyCode===p.ENTER||a.keyCode===p.SPACE)u.stop(a),this._setFocus(),b[0].pause()})));this.own(n(this.layerSectionIcon,
"keydown",g.hitch(this,function(a){if(a.keyCode===p.ENTER||a.keyCode===p.SPACE)u.stop(a),h.contains(this.layerTitleAndFieldParentContainer,"esriCTImpactSummaryLayerFieldIcon")?h.contains(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")||this._createFieldSelectorPopupWidget():h.contains(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled")||this._showOrHideLayerDetailsContainer();a.keyCode===p.ESCAPE&&(u.stop(a),this._removeFocus(),b[0].resume())})));this.own(n(this.impactSummaryLayerField,
"keydown",g.hitch(this,function(a){if(a.keyCode===p.ENTER||a.keyCode===p.SPACE)u.stop(a),h.contains(a.target,"esriCTImpactSummaryLayerFieldIconDisabled")||this._createFieldSelectorPopupWidget();a.keyCode===p.ESCAPE&&(u.stop(a),this._removeFocus(),b[0].resume())})));this.own(n(this.impactSummaryLayerMaxRecordHint,"keydown",g.hitch(this,function(a){if(a.keyCode===p.ENTER||a.keyCode===p.SPACE)u.stop(a),this.isExceedingMaxRecordCount?this.emit("showMessage",this.nls.reportsTab.unableToAnalyzeText):this.emit("showMessage",
this.nls.reportsTab.layerNotVisibleText);a.keyCode===p.ESCAPE&&(u.stop(a),this._removeFocus(),b[0].resume())})))},_removeFocus:function(){this._restrictFocus();this.emit("initializeAccessibility");this._focusOutCurrentNode();x.focus(this.layerTitleAndFieldParentContainer)},_setFocus:function(){this._allowFocus();this._setFirstFocusNode();this._setLastFocusNode();this._setFocusOnFirstNode()},_restrictFocus:function(){m.set(this.layerSectionIcon,"tabindex","-1");m.set(this.impactSummaryLayerMaxRecordHint,
"tabindex","-1");m.set(this.impactSummaryLayerField,"tabindex","-1")},_allowFocus:function(){m.set(this.layerSectionIcon,"tabindex","1");h.contains(this.impactSummaryLayerMaxRecordHint,"esriCTHidden")||m.set(this.impactSummaryLayerMaxRecordHint,"tabindex","1");h.contains(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")||m.set(this.impactSummaryLayerField,"tabindex","1")},_setFirstFocusNode:function(){q.initFirstFocusNode(this.domNodeObj,this.layerSectionIcon)},_setLastFocusNode:function(){h.contains(this.impactSummaryLayerField,
"esriCTImpactSummaryLayerFieldIconDisabled")?h.contains(this.impactSummaryLayerMaxRecordHint,"esriCTHidden")?q.initLastFocusNode(this.domNodeObj,this.layerSectionIcon):q.initLastFocusNode(this.domNodeObj,this.impactSummaryLayerMaxRecordHint):q.initLastFocusNode(this.domNodeObj,this.impactSummaryLayerField)},_focusOutCurrentNode:function(){x.curNode&&x.curNode.blur()},_setFocusOnFirstNode:function(){this._focusOutCurrentNode();x.focus(this.layerSectionIcon)}})});