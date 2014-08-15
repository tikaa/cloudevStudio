
function activateSourceView() {

    console.log('activateSourceView');
    var prevElement = null;
    var nextElement = null;
    var connectionList = jsPlumb.getAllConnections();

    $('#sourceEditorTextBox').val('<sequence name="sample_sequence">');

    for (var key in connectionList){

	if(connectionList[key].sourceId != null){
	  prevElement = document.getElementById(connectionList[key].sourceId);
	}
	if(connectionList[key].targetId != null){
	     nextElement = document.getElementById(connectionList[key].targetId);
	}

	var jObj = $(prevElement).data('jsonConfig');
	console.log(prevElement);
	console.log('serializing ' + jObj);
	console.log(jObj);
	var xmlElement = '\n' + x2js.json2xml_str(jObj);
	var currentText = $('#sourceEditorTextBox').val();
	$('#sourceEditorTextBox').val(currentText + xmlElement);
     }

    var jObj = $(nextElement).data('jsonConfig');
    console.log('serializing ' + jObj);
    console.log(jObj);
    var xmlElement = '\n' + x2js.json2xml_str(jObj);
    var currentText = $('#sourceEditorTextBox').val() ;
    $('#sourceEditorTextBox').val(currentText + xmlElement + '\n</sequence>');
}



function activateDesignView() {
   console.log('activateDesignView');
   var sequenceObj = x2js.xml_str2json($("#sourceEditorTextBox").val());
   var sequence = sequenceObj.sequence;
   var logArray = sequence.log;
   console.log(logArray);

   $("#jsPlumbContainer").empty();
   var prevDivElement = null;
   for (var i=0; i<logArray.length; i++) {
       console.log(logArray[i]);
       var currentDiv = AddDiv(logArray[i]);
       if (prevDivElement != null ) {
         connectDivs(prevDivElement, currentDiv);
       }
       prevDivElement = currentDiv;
   }

}
