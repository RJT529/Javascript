//will work in windowIE
function clock() {
	

		var now = new Date();
		document.getElementById('hoursBlock').style.width = parseInt(now.getHours())*5 + "px";
		document.getElementById('hoursLabel').innerHTML = now.getHours();
		
		document.getElementById('minutesBlock').style.width = parseInt(now.getMinutes())*5 + "px";
		document.getElementById('minutesLabel').innerHTML = now.getMinutes();

		document.getElementById('secondsBlock').style.width = parseInt(now.getSeconds())*5 + "px";
		document.getElementById('secondsLabel').innerHTML = now.getSeconds();
}
function init() {

setInterval(clock,1000);
}
