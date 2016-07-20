function setImagePosition() {
	var x = 0; 
	var y = 0;
	var offsetPointer = document.getElementById('myCell');
	while(offsetPointer) {
		x += offsetPointer.offsetLeft;
		y += offsetPointer.offsetTop;
		offsetPointer = offsetPointer.offsetParent;
	}
	document.getElementById('myImage').style.left = x + "px";
	document.getElementById('myImage').style.top = y + "px";
	document.getElementById('myImage').style.visibility = "visible";

}