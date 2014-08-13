<<<<<<< HEAD
    /**
     * Created by kavith on 7/31/14.
     */
    var editorItemCounter = 0;
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
    var x =100; var CurY = null;
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
    var addAmount =0;
    var doubleClickedElementID = null;


    jsPlumb.bind("ready", function () {
        initJsPlumb($("#jsPlumbContainer"));
    });

    //try to get the canvas inside the switch mediator item!!! :( :P Awanthikooo
    function selectDeleteFunction() {
      if (CurElement != null) {
        CurElement.removeClass('selected'); //deselect old
      }

      CurElement = $(this);
      id = $(this).attr('id');
      CurElement.addClass('selected'); //select new
    }


 function setUpdatedDataCallBack(obj) {
      var strID = CurElement.attr('id');
      var divMediator = document.getElementById(strID);
      $(divMediator).data('jsonConfig', obj);
    }
=======
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
var x =120; var x1 =40; var CurY = null;var divwidth = 200;var x3=60;
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
var addAmount =0;
jsPlumb.bind("ready", function () {
    initJsPlumb($("#jsPlumbContainer"));
});

//try to get the canvas inside the switch mediator item!!! :( :P Awanthikooo
function selectDeleteFunction() {
  if (CurElement != null)
   CurElement.removeClass('selected'); //deselect old
 
  CurElement = $(this);
  id = $(this).attr('id');
  CurElement.addClass('selected'); //select new      
}
//connect function
function connectDivs(source,target){
jsPlumb.connect({
                        source:source,
                        target:target,
                        anchors:["Right", "Left" ],
			paintStyle: { strokeStyle: "#3366FF", lineWidth: 1 },
                    	connector: ["Flowchart", { curviness: 100}],
                    	connectorStyle: [{
                        lineWidth: 1,
                        strokeStyle: "#3366FF"
                    		}],
                    	hoverPaintStyle: { strokeStyle: "#3366FF", lineWidth: 8 }
                    });
>>>>>>> 751ada1768f7f68c525e5e13f4728b6c475d5399



function openPopup1(){

//     $.ajax({
//          url : "js/logMediator/logMediatorForm.html",
//          success : function(result){
//              //$('#popupDisplay').html(result);
//          }
//      });
      //var dData = $(this).data('jsonConfig');
//       var strID = CurElement.attr('id');
//       var divMediator = document.getElementById(strID);
//       var xyz = $(divMediator).data('jsonConfig');
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


    //connect function
    function connectDivs(source,target){

        jsPlumb.connect({
                source:source,
                target:target,
                anchors:["Right", "Left" ],
                paintStyle: { strokeStyle: "#3366FF", lineWidth: 1 },
                            connector: ["Flowchart", { curviness: 100}],
                            connectorStyle: [{
                            lineWidth: 1,
                            strokeStyle: "#3366FF"
                                }],
                            hoverPaintStyle: { strokeStyle: "#3366FF", lineWidth: 8 }
                        });

    }


    //add div functoin
    function AddDiv() {

            editorItemCounter++;

<<<<<<< HEAD
            var objName = "draggedElem"+editorItemCounter;
            var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
            var element = $("<div></div>");
            element.css({'top':x, 'left':250+addAmount});
            element.attr('id', objName);
            element.attr('class',"draggable");//not working
            element.prepend('<img id="theImg" src="icons/call-mediator.gif" />')
            //element.click(selectDeleteFunction); //since this makes troubles
            element.dblclick(openPopup1);
            //setData(element, type);
            element.addClass("wso2log_style");
            $("#jsPlumbContainer").append(element);
=======
//end
function createDiv(objName, element1,type,x2) {
			var yLoc1 = CurY-400;
                		var element = $("<div></div>");
                                  element.append(element1);                  		  
                                  element.click(selectDeleteFunction); //since this makes troubles
                  		  element.dblclick(openPopup);
                  		  setData(element, type);
                                  element.addClass("wso2log_style");				 
					if(type== "SwitchMediator"){			
					$("#jsPlumbContainer").append('<div id='+objName+' style="height: 200px; width: '+divwidth+'px; background: #fff0f0;"><div id="jsPlumbContainer1" style="position: relative;width: 100%;height: 100%; background: #f4f0f0;"><table width="100%" height="100%"><tr><td  style="height: 100%;width: 50px; border:1px solid #ccc; border-width:1px 1px 1px 1px;" id="draggedSwitchMediatorin" rowspan="2" style="border:1px solid #ccc; border-width:1px 1px 1px 1px;">Switch Mediator</td><td style="border:1px solid #ccc; border-width:1px 1px 1px 1px;"><div id="jsPlumbContainerWrapper11" class="well-lg"  style="height:100%; width:100%; background: #ffffff;">Case</div></td></tr><tr><td style="border:1px solid #ccc; border-width:1px 1px 1px 1px;"><div id="jsPlumbContainerWrapper12" class="well-lg"  style="height:100%; width:100%; background: #ffffff;">Default</div></td></tr></table></div></div>');
		
				element.attr('id', objName+"inside"); 
				element.addClass("draggable");
				$("#draggedSwitchMediatorin").append(element);						     
				jsPlumb.draggable(objName+"inside", {
				    containment: $("#draggedSwitchMediator2")
				});	
				//$("#jsPlumbContainerWrapper12").append(element);
				$("#"+objName).css({'top':x, 'left':yLoc1});
				}else{
				element.attr('id', objName); 
				$("#jsPlumbContainer").append(element);
				jsPlumb.draggable(objName, {
				    containment: $("#jsPlumbContainer")
				});		
				element.css({'top':x2, 'left':yLoc1});
				}
        }
//adddiv2 end
>>>>>>> 751ada1768f7f68c525e5e13f4728b6c475d5399

            addAmount= 200;
            lastItem = $("#"+objName);
    }


    function initJsPlumb(container) {
        jsPlumb.setContainer(container);

    }



<<<<<<< HEAD
    $(document).ready(function () {

      //checking mouse location
      $("#jsPlumbContainerWrapper11").mouseenter(function(){
                over="true";console.log(over);
            });
      $("#jsPlumbContainerWrapper11").mouseleave(function(){
                over="false";console.log(over);
            });


      $('jsPlumbContainerWrapper1').hide();
      x2js = new X2JS();
=======
$(document).on('mouseenter','#jsPlumbContainerWrapper11',function() {
	currentId = $(this).attr('id'); //alert(currentId);
     over="true";console.log(over);
       
});
$(document).on('mouseleave','#jsPlumbContainerWrapper11',function() {
    over="false";console.log(over);
       
});


x2js = new X2JS();
>>>>>>> 751ada1768f7f68c525e5e13f4728b6c475d5399

     //Design and Source tab change event
     $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
         var tabName = $(e.target).html();
         if ( tabName == 'Source') {
             activateSourceView();
           } else {
             activateDesignView();
           }
     });


     //var logMediator = document.registerElement('wso2-log', {
     //prototype: Object.create(HTMLDivElement.prototype) });

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


<<<<<<< HEAD
        //Make element droppable

        $("#jsPlumbContainer").droppable({

            drop: function (ev, ui) {//to locate the element
               if (over=="false"){
            var currentConnectionList = jsPlumb.getAllConnections();
            for (var key in currentConnectionList){//getting a map of the existing elements in the canvas
                 elemSourceId[key] =currentConnectionList[key].sourceId ;
                 elemSource = document.getElementById(elemSourceId[key]);
                 elemSourceLocList[key] = elemSource.offsetLeft;

                 elemTargetId[key] =currentConnectionList[key].targetId ;
                 elemTarget = document.getElementById(elemTargetId[key]);
                 elemTargetLocList[key] = elemTarget.offsetLeft;
            }

            var yLoc = CurY-400; //to get the current location in the div
            if ($(ui.draggable).attr('id').search(/dragged/) == -1) {
                    editorItemCounter++;
                    var element1 = $(ui.draggable).clone();
                    element1.removeClass("draggableIcon");
                    element1.removeClass("ui-draggable");
                    var type = element1.attr('id');alert(type);
            //getting the switch mediator background stuff created

                    var objName = "dragged" +type+ editorItemCounter;
                    var element = $("<div></div>");
                    element.append(element1);
                    element.attr('id', objName);
                    element.addClass("draggable");
                    element.click(selectDeleteFunction); //since this makes troubles
                    element.dblclick(openPopup1);
                    setData(element, type);
                    element.addClass("wso2log_style");
                    $(this).append(element);

                    jsPlumb.draggable(objName, {
                        containment: $("#jsPlumbContainer")
                    });

            if(type== "SwitchMediator"){

                /*$("#jsPlumbContainer").append('<div class="well-lg" id='+"#"+objName+' style="height: 400px;width: 600px;background: #fffff0; position:absolute;float:right;"><div id="jsPlumbContainer1" style="position: relative;width: 100%;height: 100%;"></div></div>');*/
                $("#jsPlumbContainer").append('<div class="well-lg" id='+"#"+objName+' style="height: 400px;width: 600px;background: #fffff0; position:absolute;float:right;"><div id="jsPlumbContainer1" style="position: relative;width: 100%;height: 100%;"><table width="100%" height="100%"><col width="30%"><col width="70%"><tr><td rowspan="2" style="border:1px solid #ccc; border-width:1px 1px 1px 1px;">Switch Mediator<div id="draggedSwitchMediator2" class="draggable wso2log_style ui-draggable selected"></div></td><td style="border:1px solid #ccc; border-width:1px 1px 1px 1px;">Case<div id="jsPlumbContainerWrapper11" class="well-lg"></div></td></tr><tr><td style="border:1px solid #ccc; border-width:1px 1px 1px 1px;">Default<div id="jsPlumbContainerWrapper12" class="well-lg"></div></td></tr></table></div></div>');


            $("#draggedSwitchMediator2").append(element);
            $("#"+objName).css({'top':x, 'left':yLoc});
            }else{
            element.css({'top':x, 'left':yLoc});
            }

            //trying to get from the map
            /*<tr><td id="switchM" rowspan="2" style="border:1px solid #ccc; border-width:1px 1px 1px 1px;">Switch Mediator</td><td id="CaseCompartment" style="border:1px solid #ccc; border-width:1px 1px 1px 1px;">Case</td></tr><tr><td id="DefCompartment" style="border:1px solid #ccc; border-width:1px 1px 1px 1px;">Default</td></tr>*/
            for(var mykey in elemSourceLocList){
            if(yLoc > elemSourceLocList[mykey] && yLoc < elemTargetLocList[mykey]){
            jsPlumb.detach(currentConnectionList[mykey]);
            var isMiddle = true;
            connectDivs(elemSourceId[mykey],$("#"+objName));
            connectDivs($("#"+objName),elemTargetId[mykey]);
            }}
            if(isMiddle!=true){
                if(lastItem == null){
                        lastItem = $("#"+objName);//if(lastItem1 != null){lastItem=  $("#"+"jsPlumbContainerWrapper1");}
                    }else{
                        connectDivs(lastItem,$("#"+objName));
                    }
                lastItem = $("#"+objName);
            }
                }}
            },
            tolerance: "pointer"

        });


    //});

    //dropping inside switch mediater areas
     $("#jsPlumbContainerWrapper11").droppable({

     drop: function (ev, ui) {//to locate the element
            var currentConnectionList1 = jsPlumb.getAllConnections();
            for (var key in currentConnectionList1){//getting a map of the existing elements in the canvas
                 elemSourceId1[key] =currentConnectionList1[key].sourceId ;
                 elemSource = document.getElementById(elemSourceId1[key]);
                 elemSourceLocList1[key] = elemSource.offsetLeft;

                 elemTargetId1[key] =currentConnectionList1[key].targetId ;
                 elemTarget = document.getElementById(elemTargetId1[key]);
                 elemTargetLocList1[key] = elemTarget.offsetLeft;
            }

            var yLoc = CurY-400; //to get the current location in the div
            if ($(ui.draggable).attr('id').search(/dragged/) == -1) {
                    editorItemCounter++;
                    var element1 = $(ui.draggable).clone();
                    element1.removeClass("draggableIcon");
                    element1.removeClass("ui-draggable");
                    var type = element1.attr('id');alert(type);
            //getting the switch mediator background stuff created
            if(type== "SwitchMediator"){
                $('jsPlumbContainerWrapper1').show();
            }
                    var objName = "dragged" +type+"switch"+ editorItemCounter;
                    var element = $("<div></div>");
                    element.append(element1);
                    element.css({'top':x, 'left':yLoc});
                    element.attr('id', objName);
                    element.addClass("draggable");
                    element.click(selectDeleteFunction); //since this makes troubles
                    element.dblclick(openPopup1);
                    setData(element, type);
                    element.addClass("wso2log_style");
                    $(this).append(element);
                    jsPlumb.draggable(objName, {
                        containment: $("#jsPlumbContainer")
                    });
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
            },
            tolerance: "pointer"

        });
    });
    //end of droppable two

    $(document).keydown(function(e) {
            if (e.keyCode == 13){
            AddDiv();
            AddDiv();
            connectDivs("draggedElem1","draggedElem2");

             }
             //alert(e.which); //run to find the keycode of the key you want, don't use backspace, that is used to go back in browser history
             if (e.keyCode == 46  && CurElement != null)
             {   var connectionList = jsPlumb.getAllConnections();
            for (var key in connectionList){

                    if(connectionList[key].sourceId==CurElement.attr('id')){ CurElementisSource =connectionList[key].targetId }
                if(connectionList[key].targetId==CurElement.attr('id')){ CurElementisTarget =connectionList[key].sourceId }
                //alert(i +" and "+ l);
            }

            if(CurElement.attr('id')==lastItem.attr('id') ){
                lastItem = $("#"+CurElementisTarget);
                //y = y - 100;
            }
            jsPlumb.detachAllConnections(id);
            CurElement.remove();


              if(CurElementisTarget!= null && CurElementisSource!=null )
              {
            connectDivs(CurElementisTarget,CurElementisSource);
            CurElementisSource = null;
            CurElementisTarget= null;
            }

                   CurElement = null; //clear, that element doesn't exist anymore
             }
    });



=======
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
                var type = element1.attr('id');alert(type);
		//getting the switch mediator background stuff created
		
                var objName = "dragged" +type+ editorItemCounter;
               
		createDiv(objName, element1,type,x);
				
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

$(document).keydown(function(e) {
		if (e.keyCode == 13){
		AddDiv(); 
		AddDiv();
		connectDivs("draggedElem1","draggedElem2");  
		
		 }
         //alert(e.which); //run to find the keycode of the key you want, don't use backspace, that is used to go back in browser history
         if (e.keyCode == 46  && CurElement != null)
         {   var connectionList = jsPlumb.getAllConnections(); 
		for (var key in connectionList){
			
    			if(connectionList[key].sourceId==CurElement.attr('id')){ CurElementisSource =connectionList[key].targetId }
			if(connectionList[key].targetId==CurElement.attr('id')){ CurElementisTarget =connectionList[key].sourceId }
			//alert(i +" and "+ l);
		}
		
		if(CurElement.attr('id')==lastItem.attr('id') ){
			lastItem = $("#"+CurElementisTarget);
			//y = y - 100;
		}
		jsPlumb.detachAllConnections(id);
		CurElement.remove();
               
		
	      if(CurElementisTarget!= null && CurElementisSource!=null )
	      { 
		connectDivs(CurElementisTarget,CurElementisSource); 		
		CurElementisSource = null;
		CurElementisTarget= null;
		}
		
               CurElement = null; //clear, that element doesn't exist anymore
         }
});
>>>>>>> 751ada1768f7f68c525e5e13f4728b6c475d5399
