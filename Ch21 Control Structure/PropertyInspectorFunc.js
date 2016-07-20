addEvent(window,'load',initialize);
function addEvent(elem, eventType, func) {
	if(elem.addEventListener) {
		addEventListener(eventType,func,true);	
	} else {
		elem["on"+eventType] = func;
	}
}

function initialize() {
	var obj = document.getElementById('propertyList');
	if(obj) {
		var newElem;
		var newText;
		for(var i in window) {
			newElem = document.createElement('li');
			newElem.className = 'objectProp';
			newText = document.createTextNode('window.' + i + '=' + window[i]);
			newElem.appendChild(newText);
			obj.appendChild(newElem);
		}
	}
}