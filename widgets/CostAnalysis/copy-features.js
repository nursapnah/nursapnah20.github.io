// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/copy-features.html":'\x3cdiv class\x3d"esriCTSelectFeaturesContainer"\x3e\r\n  \x3cdiv style\x3d"height: 100%; width: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesListTitle"\x3e${nls.copyFeatures.title}\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesListContent" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesBtnContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTCopyFeaturesBtn jimu-btn" data-dojo-attach-point\x3d"createMultipleFeaturesBtn" title\x3d"${nls.copyFeatures.createFeatures}" tabindex\x3d"0" aria-label\x3d"${nls.copyFeatures.createFeatures}" role\x3d"button"\x3e${nls.copyFeatures.createFeatures}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTCopyFeaturesBtn jimu-btn" data-dojo-attach-point\x3d"createSingleFeatureBtn" title\x3d"${nls.copyFeatures.createSingleFeature}" tabindex\x3d"0" aria-label\x3d"${nls.copyFeatures.createSingleFeature}" role\x3d"button"\x3e${nls.copyFeatures.createSingleFeature}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTCopyFeaturesBtn jimu-btn" data-dojo-attach-point\x3d"cancelBtn" title\x3d"${nls.common.cancel}" tabindex\x3d"0" aria-label\x3d"${nls.common.cancel}" role\x3d"button"\x3e${nls.common.cancel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on jimu/dijit/CheckBox dojo/dom-class dojo/dom-attr ./highlightSymbolUtils esri/layers/GraphicsLayer dojo/text!./copy-features.html jimu/utils dijit/focus dojo/keys dojo/query dojo/_base/event esri/tasks/query esri/tasks/QueryTask dojo/Deferred dojo/promise/all".split(" "),function(t,u,v,w,c,e,n,f,x,m,k,y,z,A,q,B,g,r,p,C,D,E,F){return v([t,w,u],{templateString:A,
layerLabel:null,featuresList:null,checkBoxNodes:{},layerCheckBoxNodes:{},featuresByLayerId:{},featureTitlesByLayerId:{},_highlightGraphicsLayer:null,startup:function(){this.inherited(arguments);this._highlightGraphicsLayer=this._createNewGraphicsLayer("highlightGraphicsLayer");this.toggleWorkBenchDOMTabindexes("-1")},postCreate:function(){this.checkBoxNodes={};this.layerCheckBoxNodes={};this.featuresByLayerId={};this.featureTitlesByLayerId={};this._highlightGraphicsLayer=null;this.own(f(this.cancelBtn,
"click",c.hitch(this,function(){this.cancelBtnClicked();this.toggleWorkBenchDOMTabindexes("0");this.emit("cancelBtnClicked")})));this.own(f(this.cancelBtn,"keydown",c.hitch(this,function(a){if(a.keyCode===g.ENTER||a.keyCode===g.SPACE)p.stop(a),this.cancelBtnClicked(),this.toggleWorkBenchDOMTabindexes("0"),this.emit("cancelBtnClicked")})));this.own(f(this.createMultipleFeaturesBtn,"click",c.hitch(this,this._createMultipleFeaturesBtnClicked)));this.own(f(this.createMultipleFeaturesBtn,"keydown",c.hitch(this,
function(a){if(a.keyCode===g.ENTER||a.keyCode===g.SPACE)p.stop(a),this._createMultipleFeaturesBtnClicked()})));this.own(f(this.createSingleFeatureBtn,"click",c.hitch(this,this._createSingleFeatureBtnClicked)));this.own(f(this.createSingleFeatureBtn,"keydown",c.hitch(this,function(a){if(a.keyCode===g.ENTER||a.keyCode===g.SPACE)p.stop(a),this._createSingleFeatureBtnClicked()})))},toggleWorkBenchDOMTabindexes:function(a){r(".esriCTWorkBenchDOM",this.widgetDomNode).forEach(c.hitch(this,function(b){k.set(b,
"tabindex",a)}))},selectFeaturesToCopy:function(a){if(a&&0<a.length){this.checkBoxNodes={};this.layerCheckBoxNodes={};this.featuresByLayerId={};this.featureTitlesByLayerId={};this._showHideSingleFeatureButton(a[0]._layer.geometryType);m.remove(this.mainNode,"esriCTHidden");var b=new E;this._processSelectedFeatures(a,b).then(c.hitch(this,function(){n.empty(this.layerListTable);for(var a in this.featureTitlesByLayerId){var b,c;b=this.layerInfosObj.getLayerInfoById(a);b=b.title?b.title:b.name;c=n.create("div",
{},this.layerListTable);this.layerCheckBoxNodes[a]=this._createListNode(b,c,!1,a);this.checkBoxNodes[a]||(this.checkBoxNodes[a]=[]);0<this.featureTitlesByLayerId[a].length&&this._createFeatureEntries(a,c)}this._highlightFeatures()}))}this._setFirstAndLastFocusNodes()},_processSelectedFeatures:function(a,b){var d={},h,l;this.featuresByLayerId={};this.featureTitlesByLayerId={};e.forEach(a,c.hitch(this,function(a){this.featuresByLayerId[a._layer.id]||(this.featuresByLayerId[a._layer.id]=[],this.featureTitlesByLayerId[a._layer.id]=
[]);this.featuresByLayerId[a._layer.id].push(a);this.featureTitlesByLayerId[a._layer.id].push(a.getTitle())}));for(l in this.featuresByLayerId)l&&(a=this._getObjectIdFieldOfLayer(l),a=this._getSelectedFeatureObjectIds(this.featuresByLayerId[l],a),d[l]=this._getSelectedFeatureGeometry(l,a));F(d).then(c.hitch(this,function(a){for(h in a)h&&this._updateGeometryForSelectedFeature(h,a)}),c.hitch(this,function(){this.appUtils.showMessage(this.nls.copyFeatures.copyFeatureUpdateGeometryError)}));return b.resolve(null)},
_getObjectIdFieldOfLayer:function(a){return this.layerInfosObj.getLayerInfoById(a).layerObject.objectIdField},_updateGeometryForSelectedFeature:function(a,b){var d;d=this._getObjectIdFieldOfLayer(a);e.forEach(this.featuresByLayerId[a],c.hitch(this,function(h){e.forEach(b[a].features,c.hitch(this,function(a){a.attributes[d]===h.attributes[d]&&(h.geometry=a.geometry)}))}))},_getSelectedFeatureObjectIds:function(a,b){var d=[];e.forEach(a,c.hitch(this,function(a){d.push(a.attributes[b])}));return d},
_getSelectedFeatureGeometry:function(a,b){var d,c;c=this.layerInfosObj.getLayerInfoById(a);a=new D(c.getUrl());d=new C;d.outFields=[c.layerObject.objectIdField];d.objectIds=b;d.returnGeometry=!0;d.outSpatialReference=this.map.spatialReference;return a.execute(d).promise},_createFeatureEntries:function(a,b){e.forEach(this.featureTitlesByLayerId[a],c.hitch(this,function(d){d=this._createListNode(d,b,!0,a);this.checkBoxNodes[a].push(d)}))},_createListNode:function(a,b,d,h){var e;b=n.create("div",{"class":"jimu-widget-row esriCTCopyFeaturesNode"},
b);e=n.create("div",{"class":"jimu-float-leading checkBoxNode"},b);a=new x({label:a,checked:!0},e);d?(m.add(b,"esriCTCopyFeaturesChildNode"),k.set(a.domNode,"parentLayerId",h),f(a.domNode,"click",c.hitch(this,this._childNodeStateChanged)),f(a.domNode,"keydown",c.hitch(this,function(a){a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this._childNodeStateChanged(a)}))):(k.set(a.domNode,"layerId",h),f(a.domNode,"click",c.hitch(this,this._parentNodeStateChanged)),f(a.domNode,"keydown",c.hitch(this,function(a){a.keyCode!==
g.ENTER&&a.keyCode!==g.SPACE||this._parentNodeStateChanged(a)})));return a},_parentNodeStateChanged:function(a){a=k.get(a.currentTarget,"layerId");var b=this.checkBoxNodes[a],d=this.layerCheckBoxNodes[a].getValue();e.forEach(b,c.hitch(this,function(a){d?a.setValue(!0):a.setValue(!1)}));this._highlightFeatures()},_childNodeStateChanged:function(a){var b=k.get(a.currentTarget,"parentLayerId");a=this.layerCheckBoxNodes[b];var b=this.checkBoxNodes[b],d=!0;this._highlightFeatures();e.some(b,c.hitch(this,
function(a){if(!a.getValue())return d=!1,!0}));a.setValue(d)},cancelBtnClicked:function(){m.add(this.mainNode,"esriCTHidden");this._highlightGraphicsLayer.clear()},_createMultipleFeaturesBtnClicked:function(){var a=[],b;(b=this._getSelectedFeaturesForCopy())&&0<b.length&&(e.forEach(b,c.hitch(this,function(b){b&&b.geometry&&a.push(b.geometry)})),this.emit("createMultipleFeatures",a))},_createSingleFeatureBtnClicked:function(){var a;(a=this._getSelectedFeaturesForCopy())&&0<a.length&&this.emit("createSingleFeature",
a)},_validateSelectedFeature:function(a){(!a||0>=a.length)&&this.appUtils.showMessage(this.nls.copyFeatures.selectFeatureToCopyMessage)},_getSelectedFeaturesForCopy:function(){var a,b=[];for(a in this.featuresByLayerId){var d=this._getSelectedFeaturesByLayerId(a);0<d.length&&(b=b.concat(d))}this._validateSelectedFeature(b);return b},_getSelectedFeaturesByLayerId:function(a){var b=[];e.forEach(this.checkBoxNodes[a],c.hitch(this,function(d,c){d.getValue()&&b.push(this.featuresByLayerId[a][c])}));return b},
_showHideSingleFeatureButton:function(a){"esriGeometryPoint"===a?(m.add(this.createSingleFeatureBtn,"esriCTHidden"),k.set(this.createSingleFeatureBtn,"tabindex","-1")):(m.remove(this.createSingleFeatureBtn,"esriCTHidden"),k.set(this.createSingleFeatureBtn,"tabindex","0"))},_createNewGraphicsLayer:function(a){var b;b={};if(a+=this.widgetId)this.map._layers[a]&&this.map.removeLayer(this.map._layers[a]),b={id:a};a=new z(b);this.map.addLayer(a);return a},_highlightFeatures:function(){this._highlightGraphicsLayer.clear();
for(var a in this.featureTitlesByLayerId)this._highlightSingleLayerFeatures(a)},_highlightSingleLayerFeatures:function(a){var b;b=this.map.getLayer(a);a=this._getSelectedFeaturesByLayerId(a);e.forEach(a,c.hitch(this,function(a){a=y.getHighLightSymbol(a,b);this._highlightGraphicsLayer.add(a)}))},_setFirstAndLastFocusNodes:function(){var a=r(".jimu-checkbox",this.domNode);a.length&&(B.focus(a[0]),q.initFirstFocusNode(this.widgetDomNode,a[0]));q.initLastFocusNode(this.widgetDomNode,this.cancelBtn)}})});