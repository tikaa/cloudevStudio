jsPlumb.ready(function() {


	jsPlumb.bind('connection',function(info,ev){
    		var con=info.connection;   //this is the new connection
	});
	var instance = jsPlumb.getInstance({
		// default drag options
		DragOptions : { cursor: 'pointer', zIndex:2000 },
		// the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
		// case it returns the 'labelText' member that we set on each connection in the 'init' method below.
		ConnectionOverlays : [
			[ "Arrow", { location:1 } ],
		],
		Container:"flowchart-demo"
	});

	// this is the paint style for the connecting lines..
	var connectorPaintStyle = {
		lineWidth:4,
		strokeStyle:"#61B7CF",
		joinstyle:"round",
		outlineColor:"white",
		outlineWidth:2
	},
	// .. and this is the hover style. 
	connectorHoverStyle = {
		lineWidth:4,
		strokeStyle:"#216477",
		outlineWidth:2,
		outlineColor:"white"
	},
	endpointHoverStyle = {
		fillStyle:"#216477",
		strokeStyle:"#216477"
	},
	// the definition of source endpoints (the small blue ones)
	sourceEndpoint = {
		endpoint:"Dot",
		paintStyle:{ 
			strokeStyle:"transparent",
			fillStyle:"transparent",
			radius:5,
			lineWidth:2 
		},				
		isSource:true,
		connector:[ "Flowchart", { stub:[40, 60], gap:10, cornerRadius:5, alwaysRespectStubs:true } ],								                
		connectorStyle:connectorPaintStyle,
		hoverPaintStyle:endpointHoverStyle,
		connectorHoverStyle:connectorHoverStyle,
        dragOptions:{},

	},		
	// the definition of target endpoints (will appear when the user drags a connection) 
	targetEndpoint = {
		endpoint:"Dot",					
		paintStyle:{ fillStyle:"transparent",radius:5 },
		hoverPaintStyle:endpointHoverStyle,
		maxConnections:-1,
		dropOptions:{ hoverClass:"hover", activeClass:"active" },
		isTarget:true,			
	},			
	init = function(connection) {			
		//connection.getOverlay("label").setLabel(connection.sourceId.substring(15) + "-" + connection.targetId.substring(15));
		connection.bind("editCompleted", function(o) {
			if (typeof console != "undefined")
				console.log("connection edited. path is now ", o.path);
		});
	};			

	var _addEndpoints = function(toId, sourceAnchors, targetAnchors) {
			for (var i = 0; i < sourceAnchors.length; i++) {
				var sourceUUID = toId + sourceAnchors[i];
				instance.addEndpoint("flowchart" + toId, sourceEndpoint, { anchor:sourceAnchors[i], uuid:sourceUUID });						
			}
			for (var j = 0; j < targetAnchors.length; j++) {
				var targetUUID = toId + targetAnchors[j];
				instance.addEndpoint("flowchart" + toId, targetEndpoint, { anchor:targetAnchors[j], uuid:targetUUID });						
			}//alert("icamehere!!!");
		};

	// suspend drawing and initialise.
	instance.doWhileSuspended(function() {

		//_addEndpoints("Window4", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);			
		//_addEndpoints("Window2", ["LeftMiddle", "BottomCenter"], ["TopCenter", "RightMiddle"]);
		//_addEndpoints("Window3", ["RightMiddle", "BottomCenter"], ["LeftMiddle", "TopCenter"]);
		_addEndpoints("Window4", ["RightMiddle"], ["LeftMiddle"]);
		_addEndpoints("Window2", ["RightMiddle"], ["LeftMiddle"]);
		_addEndpoints("Window3", ["RightMiddle"], ["LeftMiddle"]);
		_addEndpoints("Window1", ["RightMiddle"], ["LeftMiddle"]);
					
		// listen for new connections; initialise them the same way we initialise the connections at startup.
		instance.bind("connection", function(connInfo, originalEvent) { 
			init(connInfo.connection);
		});			
					
		// make all the window divs draggable						
		instance.draggable(jsPlumb.getSelector(".flowchart-demo .window"), { grid: [20, 20] });		
		// THIS DEMO ONLY USES getSelector FOR CONVENIENCE. Use your library's appropriate selector 
		// method, or document.querySelectorAll:
		//jsPlumb.draggable(document.querySelectorAll(".window"), { grid: [20, 20] });
        
		// connect a few up
		instance.connect({uuids:["Window1RightMiddle", "Window2LeftMiddle"], editable:true});
		instance.connect({uuids:["Window2RightMiddle", "Window3LeftMiddle"], editable:true});
		instance.connect({uuids:["Window3RightMiddle", "Window4LeftMiddle"], editable:true});
		//instance.connect({uuids:["Window3RightMiddle", "Window2RightMiddle"], editable:true});
		//instance.connect({uuids:["Window4BottomCenter", "Window1TopCenter"], editable:true});
		//instance.connect({uuids:["Window3BottomCenter", "Window1BottomCenter"], editable:true});
		//
        
		//
		// listen for clicks on connections, and offer to delete connections on click.
		//
		instance.bind("click", function(conn, originalEvent) {
			if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
				jsPlumb.detach(conn); 
		});	
		
		instance.bind("connectionDrag", function(connection) {
			console.log("connection " + connection.id + " is being dragged. suspendedElement is ", connection.suspendedElement, " of type ", connection.suspendedElementType);
		});		
		
		instance.bind("connectionDragStop", function(connection) {
			console.log("connection " + connection.id + " was dragged");
		});

		instance.bind("connectionMoved", function(params) {
			console.log("connection " + params.connection.id + " was moved");
		});
	});

	jsPlumb.fire("jsPlumbDemoLoaded", instance);
		


//select and delete elements by Awanthika
var CurElement = null;

      $("#flowchartWindow2").bind('click', function () {
          if (CurElement != null)
              CurElement.removeClass('selected'); //deselect old
          
          CurElement = $(this);
          
          CurElement.addClass('selected'); //select new
      });
 $("#flowchartWindow1").bind('click', function () {
          if (CurElement != null)
              CurElement.removeClass('selected'); //deselect old
          //creating a connection onclick
	
          CurElement = $(this);
          
          CurElement.addClass('selected'); //select new
      });
 $("#flowchartWindow3").bind('click', function () {
          if (CurElement != null)
              CurElement.removeClass('selected'); //deselect old
          
          CurElement = $(this);
          
          CurElement.addClass('selected'); //select new
      });
 $("#flowchartWindow4").bind('click', function () {
          if (CurElement != null)
              CurElement.removeClass('selected'); //deselect old
          
          CurElement = $(this);
          
          CurElement.addClass('selected'); //select new
      });
      
      $(document).keydown(function(e) {
          //alert(e.which); //run to find the keycode of the key you want, don't use backspace, that is used to go back in browser history
          if (e.keyCode == 46 /*the delete key*/ && CurElement != null)
          {
              CurElement.remove();
		var id = CurElement.attr('id');
              //Run other code here when the element 'CurElement' is deleted
              jsPlumb.detachAllConnections(id);
              
              CurElement = null; //clear, that element doesn't exist anymore  add-btn
          }
      });

//adding new elements into canvas

//adding new Divs
var divID ="flowchartWindow";
var i =4;
function AddDiv() {
            i++;
            var Div = $('<div>', { id:"flowchartWindow"+i }, 
                                 { class: 'window _jsPlumb_endpoint_anchor_ jsplumb-draggable' })
                      .css(
                                 { height: '45px', 
                                   width: '45px',
				   left: '400px',
				   top: '100px',
				   'background-image':'url(./proxy.png)'
                                   
                                 }
                          ).appendTo('body');
            jsPlumb.draggable($(Div));
            $(Div).addClass('window');
		$('#flowchart-demo').append($(Div)) 
		_addEndpoints("Window"+i, ["RightMiddle"], ["LeftMiddle"]);
		var a = i-1;	
		jsPlumb.connect({
		    source:"flowchartWindow"+a, 
		    target:"flowchartWindow"+i,
		    anchors:["Right", "Left" ],
		    endpoint:"Rectangle",
		    endpointStyle:{ fillStyle: "blue" }
			});
		
        }

$("#add-btn").bind('click', function () {
         //add a new element and create an inrementel id to give a unique id to the element
		AddDiv();
      });



	
});



function addElement() {

  var ni = document.getElementById('flowchart-demo');

  var newdiv = document.createElement('div');

  var divIdName = 'flowchartWindow6';

  newdiv.setAttribute('id',divIdName);
  newdiv.setAttribute('class','window');


}

