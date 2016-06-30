
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
/*
function initialize()
{
	document.write("hello");
	if(!document.getElementById) return false;

}
*/
var imageLib = new Array();
imageLib["image1"] = new Image(300,500);
imageLib["image1"].src = "image1.png";
imageLib["image2"] = new Image(300,500);
imageLib['image2'].src = "image2.jpg";
imageLib["image3"] = new Image(300,500);
imageLib['image3'].src = "image3.jpg";


function initialize()
{
		
	if(!document.getElementById) return false;

	var obj  = document.getElementById('imageChooser');
	if(obj) {
		//document.write("hello");
		addEvent(obj,'change',changeImage);
	}

}

function changeImage()
{
	//document.write("hello");
	var imageName = this.options[this.selectedIndex].value;
	document.getElementById('thumbnail').src = imageLib[imageName].src;
}
