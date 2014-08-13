
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


var logMediatorData2 = null;

  $(document).ready(function(){

    //$("#propertyName0").val('susinda');
    var logMediatorID = window.parent.doubleClickedElementID;
    console.log('element is ' +  logMediatorID);
       //var logMediator = $(element).data('jsonConfig');

    var divMediator = window.parent.document.getElementById(logMediatorID);
    console.log('divMediator is ' +  divMediator);
    var logMediatorData = $(divMediator).data('jsonConfig');
    console.log('inside form  ' + logMediatorData.logLevel);
    console.log('description ' +  logMediatorData.description);

    //$("#mediator_log_log_separator").val(logMediator.separator);
    $('#mediator_log_category').prop("selectedIndex", logMediator.category);
    $('#mediator_log_log_level').prop("selectedIndex", logMediator.logLevel);
    $("#propertyName0").val(logMediatorData.description);
    var logMediatorData2 = jQuery.extend(true, {}, logMediatorData);

$("#mybutton").click(function() {

	var propertyName = $('#propertyName0').val();
	var category = $('#mediator_log_category :selected').text();
	var logLevel =  $('#mediator_log_log_level :selected').text();
    var seperator = $("#mediator_log_log_separator").val();


    var logMediatorID = window.parent.doubleClickedElementID;
    console.log(' saving element is ' +  logMediatorID);
//    var divMediator2 = window.parent.document.getElementById(logMediatorID);
//    console.log('saving divMediator is ' +  divMediator2);
//    var logMediatorData2 = $(divMediator2).data('jsonConfig');
    console.log('saving loglevel  ' + logMediatorData2.logLevel);

	logMediatorData2.logLevel = logLevel;
	logMediatorData2.category = category;
	logMediatorData2.description = propertyName;
	logMediatorData2.separator = seperator;

    //window.parent.CurElement.data('jsonConfig', logMediator);
    //var logMediator2 = window.parent.CurElement.data('jsonConfig');
    //alert(logMediator2.description + "  " + logMediator.category);
    window.parent.setUpdatedDataCallBack(logMediatorData2);


//$.each(window, function(i, obj) {
  //use obj.id and obj.name here, for example:
  //console.log(i + "  is    " + obj);
//});


	});

});