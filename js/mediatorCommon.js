
/////////////////////////  set the data acording to the mediator     ///////////////////////////////////
function setData(element, type) {

if (type == 'logMediator') {
   var logString = $.parseJSON(JSON.stringify('{"log":{"_logLevel":0, "_separator":"- ", "_category":1, "properties":[], "description":"susinda logmed"}}'));
   element.data('jsonConfig' , logString);
} 
if (type == 'dropMediator') {
   var logString = $.parseJSON(JSON.stringify('{"logLevel":0, "separator":"- ", "category":1, "properties":[], "description":"susinda dropeedd"}'));
   element.data('jsonConfig' , logString);
} 

}
///////////////////////////////////////////////////////////////////////


////////////////////////////  this will openup the config dialog acording to the mediator   /////////////////////////////////
function openPopup() {

var type = $(this).attr('id');
var xmlConfig = $(this).data('jsonConfig');
if(type.indexOf('logMediator') != -1){
   openLogMediatorPopup(xmlConfig); 
}

if(type.indexOf('dropMediator') != -1){
   openLogMediatorPopup(xmlConfig); 
}

} 
////////////////////////////////////////////////////////////////////


function convertXml2Json(xmlString) {
    var jsonLogMediator = (JSON.stringify(x2js.xml_str2json(xmlString)));
    return jsonLogMediator;
}

function convertJson2Xml(jsonObject) {
    var xmlString =  (x2js.json2xml_str($.parseJSON(jsonObject)));
    return xmlString;
}


function activateSourceView() {

$('#sourceEditorTextBox').val("");
var prevElement = null;
var nextElement = null;
var connectionList = jsPlumb.getAllConnections();
for (var key in connectionList){

    if(connectionList[key].sourceId != null){
         alert(connectionList[key].sourceId);
         prevElement = document.getElementById(connectionList[key].sourceId);
         alert(prevElement + "ss");
    }
	if(connectionList[key].targetId != null){
	     nextElement = document.getElementById(connectionList[key].targetId);
	}

    var jObj = $(prevElement).data('jsonConfig');
    var xmlElement = serializeLogMediator(jObj);
    var currentText = $('#sourceEditorTextBox').val();
    $('#sourceEditorTextBox').val(currentText + xmlElement);
}


    var jObj = $(nextElement).data('jsonConfig');
    var xmlElement = serializeLogMediator(jObj);
    var currentText = $('#sourceEditorTextBox').val();
    $('#sourceEditorTextBox').val(currentText + xmlElement);

}

function activateDesignView() {
   // do nothing
   // do nothing
}
