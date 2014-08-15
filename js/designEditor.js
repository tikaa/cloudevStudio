
//try to get the canvas inside the switch mediator item!!! :( :P Awanthikooo
function selectDeleteFunction() {
  if (CurElement != null)
   CurElement.removeClass('selected'); //deselect old

  CurElement = $(this);
  id = $(this).attr('id');
  CurElement.addClass('selected'); //select new
}



 function designViewKeyDown(e) {
	
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
}


function createDiv(objName, image,type,x2) {
            var yLoc1 = CurY-400;
            var element = $("<div></div>");

            element.click(selectDeleteFunction);
            element.dblclick(openPopup);
            setData(element, type);


            if(type== "SwitchMediator"){
                 addSwitchMediator(element, objName, yLoc1, image);
            }else{
                element.attr('id', objName);
                element.append(image);
                $("#jsPlumbContainer").append(element);
                jsPlumb.draggable(objName, {
                    containment: $("#jsPlumbContainer")
                });
                element.css({'top':x2, 'left':yLoc1});
                element.addClass("wso2log_style");
            }
 }


//add div functoin
function AddDiv(logMediatorObj) {

       jsonStr = '{"log":' + JSON.stringify(logMediatorObj) + ' }'
       jsonObj1 = $.parseJSON(jsonStr);

       editorItemCounter++;
       var objName = "draggedElem"+editorItemCounter;
       console.log('Adding a log mediator' + objName + '  ' + jsonStr);
       console.log(jsonObj1);
       var element = $("<div></div>");
       element.css({'top':x, 'left':250 + xSpace});
       element.attr('id', objName);
       element.addClass("draggable"); 
       element.prepend('<img src="icons/log-mediator.gif" />')
       element.click(selectDeleteFunction);  
       element.dblclick(openPopup);
       element.data('jsonConfig', jsonObj1);
       element.addClass("wso2log_style");
       $("#jsPlumbContainer").append(element);
	   lastItem = $("#"+objName);
	   xSpace += 200;
	   return objName;
}


function addSwitchMediator(element, objName, yLoc1, image) {

    $("#jsPlumbContainer").append('<div id='+objName+' style="height: 165px; width: '+divwidth+'px; background: #fff0f0;"></div>')
    $("#"+objName).append('<div id="jsPlumbContainer1" style=" height:100%; width:100%;"></div>')
    $("#jsPlumbContainer1").append('<table id="switchtableID" width="100%" height="100%"><table/>');
    $("#switchtableID").append('<tr><td  id="draggedSwitchMediatorin" rowspan="2" style="switchTableLeftTDStyle">Switch Mediator</td><td style="switchTableTDStyle"><div id="jsPlumbContainerWrapper11" class="well-lg"  style="height:100%; width:100%; background: #ffffff;">Case</div></td></tr>');
    $("#switchtableID").append('<tr><td style="switchTableTDStyle"><div id="jsPlumbContainerWrapper12" class="well-lg"  style="height:100%; width:100%; background: #ffffff;">Default</div></td></tr>');
    $("#draggedSwitchMediatorin").append(image);
    element.attr('id', objName+"inside");
    $("#"+objName).addClass("wso2log_style");
    $("#"+objName).draggable()
    $("#draggedSwitchMediatorin").append(element);
    $( "#"+objName+"inside" ).position({
          my: "left center",
          at: "left center",
          of: "#draggedSwitchMediatorin"
        });
    
    //$("#jsPlumbContainerWrapper12").append(element);
    $("#"+objName).css({'top':x5, 'left':yLoc1});
}


//connect function
function connectDivs(source,target){
    console.log('connectDivs ' + source + '   ' + target);
    jsPlumb.connect({
                 source:source,
                 target:target,
                 anchors:["Right", "Left" ],
	         paintStyle: { strokeStyle: "#3366FF", lineWidth: 1 },
                 connector: ["Flowchart", { curviness: 100}],
                 connectorStyle: [{ lineWidth: 1, strokeStyle: "#3366FF" }],
                 hoverPaintStyle: { strokeStyle: "#3366FF", lineWidth: 8 }
                 });
}


