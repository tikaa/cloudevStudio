/**
 * Created by kavith on 7/31/14.
 */
var editorItemCounter = 0;
var currentId= null;
var count = 0;
var counter = 0;
var lastItem= null;
var lastItem1= null;
var dataString = null;
var CurElement = null;
var id = null;
var over = "false";
var CurElementisSource =null;
var CurElementisTarget = null;
var x =170; var x1 =170; var CurY = null;var divwidth = 200;var x3=60; var x5 = 120;
var elemSourceLocList = [];
var elemTargetLocList = [];
var elemSourceId = [];
var elemTargetId = [];
var elemSourceLocList1 = [];
var elemTargetLocList1 = [];
var elemSourceId1 = [];
var elemTargetId1 = [];
var elemSource = null;
var elemTarget = null;
var xSpace =0; var a =0;
var currentPopup = null;
var x2js = null;


jsPlumb.bind("ready", function () {
	initJsPlumb($("#jsPlumbContainer"));
});


function initJsPlumb(container) {
	jsPlumb.setContainer(container);
}

$(document).keydown(function(e) {
        designViewKeyDown(e);
});

function setUpdatedDataCallBack(obj) {
	var strID = CurElement.attr('id');
	var divMediator = document.getElementById(strID);
	$(divMediator).data('jsonConfig', obj);
	currentPopup.dialog("close");
}


function openPopup(){
       if(a==0){     
      doubleClickedElementID = $(this).attr('id');
      $(document.body).append('<div id="logMpopup"></div>');
	    $("#logMpopup").attr('id', "logMpopup");
            $("#logMpopup").load('js/logMediator/logMediatorForm.html');
            $("#logMpopup").dialog({ autoOpen: false,
            	       bgiframe: true,
                     height: 400,
                     width: 600,
                     modal: false,
                     draggable: true,
                     resizable: true,
                     position: 'center' });
      $("#logMpopup").dialog('option', 'title', 'Log Mediator');
      currentPopup = $("#logMpopup"); ++a;}
      currentPopup.dialog("open");
		
}

$(document).ready(function () {

	x2js = new X2JS();

	$(document).on('mouseenter','#jsPlumbContainerWrapper11',function() {
		currentId = $(this).attr('id'); //alert(currentId);
	     over="true";console.log(over);

	});
	$(document).on('mouseleave','#jsPlumbContainerWrapper11',function() {
	    over="false";console.log(over);

	});


	 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	      console.log('tabChagne');
	     var tabName = $(e.target).html();
	     if ( tabName == 'Source') {
		 activateSourceView();
	       } else {
		 activateDesignView();
	       }
	 });



         $(document).mousemove(function(e){// to get the cursor point to drop an icon
		         CurY= e.pageX;
		               });



    $(".draggableIcon").draggable({
        helper: 'clone',
        containment: 'jsPlumbContainer',
        cursor: 'move',
        zIndex: 1000,
        //When first dragged
        stop: function (ev, ui) {

        }
    });




    //Make element droppable
    $("#jsPlumbContainer").droppable({

        drop: function (ev, ui) {//to locate the element
		var yLoc = CurY-400; //to get the current location in the div
		var currentConnectionList = jsPlumb.getAllConnections();
		for (var key in currentConnectionList){//getting a map of the existing elements in the canvas
			 elemSourceId[key] =currentConnectionList[key].sourceId ;
			 elemSource = document.getElementById(elemSourceId[key]);
			 elemSourceLocList[key] = elemSource.offsetLeft;

			 elemTargetId[key] =currentConnectionList[key].targetId ;
			 elemTarget = document.getElementById(elemTargetId[key]);
			 elemTargetLocList[key] = elemTarget.offsetLeft;
		}

		if (over=="false"){
		if ($(ui.draggable).attr('id').search(/dragged/) == -1) {
                editorItemCounter++;
                var element1 = $(ui.draggable).clone();
                element1.removeClass("draggableIcon");
                element1.removeClass("ui-draggable");
                var type = element1.attr('id');
		//getting the switch mediator background stuff created

                var objName = "dragged" +type+ editorItemCounter;
		createDiv(objName, element1,type,170);

		for(var mykey in elemSourceLocList){
		if(yLoc > elemSourceLocList[mykey] && yLoc < elemTargetLocList[mykey]){
		jsPlumb.detach(currentConnectionList[mykey]);
		var isMiddle = true;
		connectDivs(elemSourceId[mykey],$("#"+objName));
		connectDivs($("#"+objName),elemTargetId[mykey]);
		}}
		if(isMiddle!=true){
		if(lastItem == null){
			if(type== "SwitchMediator"){lastItem = $("#"+objName); }else{
                    lastItem = $("#"+objName);}
                }else{
		            connectDivs(lastItem,$("#"+objName));
                }
                if(type!= "SwitchMediator"){lastItem = $("#"+objName);}else{lastItem = $("#"+objName); }
		}
            }
		}else{//to locate the element
                  		x3 +=80;alert(x3);
				$("#draggedSwitchMediator1").css("width", divwidth+x3+"px");
				$("#jsPlumbContainer1").css("width", divwidth+x3+"px");
				$("#draggedSwitchMediator1").css("height", "300px");
				$("#draggedSwitchMediatorin").css("width", "80px");
				$("#jsPlumbContainer1").css("height", "300px");
                  		if ($(ui.draggable).attr('id').search(/dragged/) == -1) {
                                  editorItemCounter++;
                                  var element1 = $(ui.draggable).clone();
                                  element1.removeClass("draggableIcon");
                                  element1.removeClass("ui-draggable");
                                  var type = element1.attr('id');
                  		//getting the switch mediator background stuff created
                  		if(type== "SwitchMediator"){
                  			$('jsPlumbContainerWrapper1').show();
                  		}
                                  var objName = "dragged" +type+"switch"+ editorItemCounter;

				createDiv(objName, element1,type,x1);
                  		//trying to get from the map
                  		for(var mykey in elemSourceLocList){

                  		if(yLoc > elemSourceLocList1[mykey] && yLoc < elemTargetLocList1[mykey]){
                  		jsPlumb.detach(currentConnectionList1[mykey]);
                  		var isMiddle = true;
                  		connectDivs(elemSourceId1[mykey],$("#"+objName));
                  		connectDivs($("#"+objName),elemTargetId1[mykey]);
                  		}}
                  		if(isMiddle!=true){
                  		if(lastItem1 == null){
                                      lastItem1 = $("#"+objName);
                                  }else{
                  		connectDivs(lastItem1,$("#"+objName));
                                  }
                                  lastItem1 = $("#"+objName);
                  		}
                              }
                          }
        },
	tolerance: "pointer"

    });
});
//end of droppable two






