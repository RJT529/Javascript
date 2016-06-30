addEvent(window,'load',initialize);

function addEvent(elem, evtType,func)
{
	if(elem.addEventListener){
		elem.addEventListener(evtType,func,false);
	} else {
		elem["on"+ evtType] = func;
	}
}
//window.onload = initialize;

function initialize()
{
	if(!document.getElementById) return false;

	var b = document.getElementById('Procede');
	if(b) {
		addEvent(b,"click",formSubmit);
	}
}

function formSubmit()
{
	opener.document.getElementById('hiddenpara').innerHTML = "1";
	window.close();
}
