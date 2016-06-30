function addEvent(elem, evtType,func)
{
	if(elem.addEventListener){
		elem.addEventListener(evtType,func,false);
	} else {
		elem["on"+ evtType] = func;
	}
}

addEvent(window,'load',initialize);

var oFootnote = "null";
var sFootnoteClass = "";


function initialize()
{
	
	if(!document.getElementById) return false;

	var anchors = document.getElementsByTagName('a');

	for(var i = 0; i < anchors.length; i++) {
		var sTarget = anchors[i].getAttribute('target');
			if(sTarget && sTarget == 'frameFootnotes') {
				addEvent(anchors[i],'click',highlightFootnotes);
			}
	}

}

function highlightFootnotes() 
{
	if(oFootnote){
		oFootnote.className = sFootnoteClass;

	}

	var sHref = this.getAttribute('href');
	var iHash = sHref.indexOf('#');
	var sFootnoteId = sHref.substr(iHash +1);
	var sFrameId = this.getAttribute('target');

	if(parent[sFrameId]) {
		oFootnote = parent[sFrameId].document.getElementById(sFootnoteId);
		if(oFootnote) {
			sFootnoteClass = oFootnote.className;
			oFootnote.className = 'selected';
		}
	}
}