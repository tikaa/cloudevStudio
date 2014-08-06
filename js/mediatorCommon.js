
/////////////////////////  set the data acording to the mediator     ///////////////////////////////////
function setData(element, type) {

if (type == 'logMediator') {
   var logString = $.parseJSON(JSON.stringify('{"logLevel":0, "separator":"- ", "category":1, "properties":[], "description":"susinda log"}'));
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
