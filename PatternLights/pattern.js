addEvent(window,'load',initialize);

function addEvent(elem, evtType,func)
{
	if(elem.addEventListener){
		elem.addEventListener(evtType,func,false);
	} else {
		elem["on"+ evtType] = func;
	}
}
addEvent(window,'load',initialize);


function initialize()
{
	//document.write("hello");

	var b1 = document.getElementById('on');
	var b2 = document.getElementById('off');
	addEvent(b1,'click',start);
	addEvent(b2,'click',stop);

}
var id;
function start() {

	id = setInterval('lights()',1000);
}
function stop() {
	clearInterval(id);
}
function lights()
{

	var d = new Date();
	var s = d.getSeconds();
	if(s%3 == 0) {
		document.getElementById("red").innerHTML = "DIWALI LIGHTS";
		document.getElementById("blue").innerHTML = "";
		document.getElementById("green").innerHTML = "";
	} else if(s%3 == 1) {
		document.getElementById("red").innerHTML = "";
		document.getElementById("blue").innerHTML = "DIWALI LIGHTS";
		document.getElementById("green").innerHTML = "";

	}else {
		document.getElementById("red").innerHTML = "";
		document.getElementById("blue").innerHTML = "";
		document.getElementById("green").innerHTML = "DIWALI LIGHTS";
	}
}
