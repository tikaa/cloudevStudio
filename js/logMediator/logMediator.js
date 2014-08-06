
function openLogMediatorPopup(xmlConfig) {
//this need to be dinamically loaded
$('#popupDialogIframe').attr('src', "js/logMediator/logMediatorForm.html?" + xmlConfig);
$("#logMediatorPopupDialog").dialog({ autoOpen: false,
	bgiframe: true,
         height: 400,
         width: 600,
         modal: false,
         draggable: true,
         resizable: true,
         position: 'center' });
$('#logMediatorPopupDialog').dialog('option', 'title', 'Log Mediator');
$("#logMediatorPopupDialog").dialog("open");

//and may need to have a call back on parent page or set some propeties in parent
}



