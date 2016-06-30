window.onload = insertDateTime;

function insertDateTime() {
	
	if(!document.getElementById) return;
	if(!document.createTextNode) return;

	var nowTime = new Date();
	var tstring = nowTime.toLocaleString();

	var x = document.getElementById("now");
	while(x.firstChild) {
		x.removeChild(x.firstChild);
	}
	var y = document.createTextNode(tstring);
	x.appendChild(y);

}
