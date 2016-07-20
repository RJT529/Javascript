function addBubbleListener(elemID) {
	document.getElementById(elemID).addEventListener("click",reportEvent,false);
}

function addCaptureListener(elemID) {
	document.getElementById(elemID).addEventListener('click',reportEvent,true);
}

function removeBubbleListener(elemID) {
	document.getElementById(elemID).removeEventListener("click",reportEvent,false);
}

function removeCaptureListener(elemID) {
	document.getElementById(elemID).removeEventListener('click',reportEvent,true);
}

function reportEvent(evt) {
	var elem = (evt.target.nodeType == 1) ? evt.target.parentNode : evt.target;
	document.write(evt.target.parentNode);
	if(elem.id == "mySPAN") {
		var msg = "Event Processed at " + evt.currentTarget.tagName + "element(event phase = " + evt.eventPhase + ").\n";
		document.controls.output.value += msg;
	}
}
function clearTextArea() {
	document.controls.output.value = "";
}