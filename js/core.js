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

}
//add div functoin
function AddDiv() {
		
            editorItemCounter++;
		
                var objName = "draggedElem"+editorItemCounter;

                var element = $("<div></div>");
                var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))		
		element.css({'top':x, 'left':250+addAmount});
                element.attr('id', objName);		
                element.attr('class',"draggable");//not working
		element.prepend('<img id="theImg" src="icons/call-mediator.gif" />')
                element.click(selectDeleteFunction); //since this makes troubles
		element.dblclick(openPopup);		
		//setData(element, type);
                element.addClass("wso2log_style");
                //$(this).append(element);
                $("#jsPlumbContainer").append(element);
           
		addAmount= 200;
		lastItem = $("#"+objName);
        }

//end


function initJsPlumb(container) {
    jsPlumb.setContainer(container);

}



$(document).ready(function () {

//checking mouse location
  $("#jsPlumbContainerWrapper11").mouseenter(function(){
            over="true";console.log(over);
        });
  $("#jsPlumbContainerWrapper11").mouseleave(function(){
            over="false";console.log(over);
        });
 
//end
$('jsPlumbContainerWrapper1').hide();
x2js = new X2JS();

 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
     var tabName = $(e.target).html();
     if ( tabName == 'Source') {
         activateSourceView();
       } else {
         activateDesignView();
       }
 });


var logMediator = document.registerElement('wso2-log', {
prototype: Object.create(HTMLDivElement.prototype) }); 

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
		element.dblclick(openPopup);		
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
		element.dblclick(openPopup);		
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



