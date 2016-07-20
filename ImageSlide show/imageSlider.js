addEvent(window,'load',initialize);

function addEvent(elem, evtType,func)
{
	if(elem.addEventListener){
		elem.addEventListener(evtType,func,false);
	} else {
		elem["on"+ evtType] = func;
	}
}

var imageLib = new Array();
imageLib[0] = new Image(300,500);
imageLib[0].src = "1.png";
imageLib[1] = new Image(300,500);
imageLib[1].src = "2.jpg";
imageLib[2] = new Image(300,500);
imageLib[2].src = "3.jpg";

function initialize() {
	if(!document.getElementById) return false;
	
	
	var b1 = document.getElementById('start');
	var b2 = document.getElementById('stop');
	if(b1 && b2) {
		addEvent(b1,'click',startShow);
		addEvent(b2,'click',stopShow);
	}
}

function change() {
	
	
	var img = document.getElementById('image');
	var index = img.getAttribute('src').substr(0,1);

	index = (parseInt(index) +1)%3;
	
	if(index == 1) 
		img.setAttribute('src',index + ".png");
	else
		img.setAttribute('src',index + ".jpg");

}
var id;
function  startShow() {
	id = setInterval(change,1000);
}
function stopShow() {
	clearInterval(id);
}
