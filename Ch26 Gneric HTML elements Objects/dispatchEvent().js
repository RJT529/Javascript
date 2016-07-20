function getEventProps(evt) 
{
	var msg = "";
	var elem = evt.target;
	msg += "event.target.nodeName: " + elem.nodeName + "\n";
	msg += "event button: " + evt.button;
	return msg;
}

function bodyClick(evt) {
	var msg = "Click event processed in BODY\n\n";
	msg += getEventProps(evt);
	alert(msg);
	checkCancelBubble(evt);
}
function pClick(evt) 
{
	var msg = "Click event processed in P\n\n";
	msg += getEventProps(evt);
	alert(msg);
	checkCancelBubble(evt);
}

function spanClick(evt) 
{
	var msg = "Click event processed in SPAN\n\n";
	msg += getEventProps(evt);
	alert(msg);
	checkCancelBubble(evt);
}

function checkCancelBubble(evt) 
{
	if(document.controls.bubbleOn.checked) {
		evt.stopPropagation();
	}
}

function init()
{
	document.body.onclick = bodyClick;
	document.getElementById('myP').onclick = pClick;
	document.getElementById('mySPAN').onclick = spanClick;

}

function doDispatch(objId,evt) 
{
	var newEvt = document.createEvent("MouseEvents");
	newEvt.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,3,null);
	document.getElementById(objId).dispatchEvent(newEvt);
	evt.stopPropagation();

}