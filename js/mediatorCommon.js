
/////////////////////////  set the data acording to the mediator     ///////////////////////////////////
function setData(element, type) {

if (type == 'logMediator') {
   var logString = $.parseJSON('{"logLevel":0, "separator":"- ", "category":1, "properties":[], "description":"susinda aaaaaa"}');
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

if(type.indexOf('logMediator') != -1){
   openLogMediatorPopup();
}

if(type.indexOf('propertyMediator') != -1){
   openLogMediatorPopup();
}

} 
////////////////////////////////////////////////////////////////////

function openLogMediatorPopup(){

      doubleClickedElementID = $(this).attr('id');
      var dElement = $("<div></div>");
      dElement.load('js/logMediator/logMediatorForm.html');
      dElement.dialog({ autoOpen: false,
      	       bgiframe: true,
               height: 400,
               width: 600,
               modal: false,
               draggable: true,
               resizable: true,
               position: 'center' });
      dElement.dialog('option', 'title', 'Log Mediator');
      dElement.dialog("open");
}




function convertXml2Json(xmlString) {
    var jsonLogMediator = (JSON.stringify(x2js.xml_str2json(xmlString)));
    return jsonLogMediator;
}

function convertJson2Xml(jsonObject) {
    var xmlString =  (x2js.json2xml_str($.parseJSON(jsonObject)));
    return xmlString;
}



function activateSourceView() {

 console.log('activatesource');
$('#sourceEditorTextBox').val("");
var prevElement = null;
var nextElement = null;
var connectionList = jsPlumb.getAllConnections();

for (var key in connectionList){
console.log('looppppppp');
    if(connectionList[key].sourceId != null){
         prevElement = document.getElementById(connectionList[key].sourceId);
    }
	if(connectionList[key].targetId != null){
	     nextElement = document.getElementById(connectionList[key].targetId);
	}

    var jObj = $(prevElement).data('jsonConfig');
    console.log(jObj);
    var xmlElement = x2js.json2xml_str(jObj);
    var currentText = $('#sourceEditorTextBox').val();
    $('#sourceEditorTextBox').val(currentText + xmlElement);
}

var jObj = $(nextElement).data('jsonConfig');
var xmlElement = x2js.json2xml_str(jObj);
var currentText = $('#sourceEditorTextBox').val();
$('#sourceEditorTextBox').val(currentText + xmlElement);
}



function activateDesignView() {
   // do nothing
   // do nothing
}

