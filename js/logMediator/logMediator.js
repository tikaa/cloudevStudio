
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


function serializeLogMediator(logMediatorObject) {
//        var mediator = $("<log></log>");
//        mediator.append("<properties></properties>);
//        mediator.attr("category", logMediator.category);
//        mediator.attr("description" , logMediator.description);
//        mediator.attr("level" , logMediator.logLevel);
//        alert(mediator);

        // just using someones library use ur own logic here
        return convertJson2Xml(logMediatorObject);
}


function deSerializeLogMediator(xmlString) {

    // just using someones library use ur own logic here
    var logObject = x2js.xml_str2json(xmlString);

    var x = 100;
    var y = 400;
    var element = $("<div></div>");
    var image = $("<img></img>");
    image.attr("src", "url(icons/log-mediator.gif)");
    element.append(image);
    element.css({'top':x, 'left' : y});
    element.attr('id', "logMediator1");
    element.addClass("draggable");
    element.click(selectDeleteFunction);
    element.dblclick(openPopup);
    element.data('jsonConfig' , logObject);
    element.addClass("wso2log_style");
    jsPlumb.draggable(objName, {containment: $("#jsPlumbContainer")});
    $("#jsPlumbContainer").append(element);

}