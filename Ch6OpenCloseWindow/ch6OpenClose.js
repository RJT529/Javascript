
//addEvent(window,'load',insertion);
window.onload = insertion;


function insertion() 
{
	if(!document.getElementById) return;

	var obutton = document.getElementById("open");
	var cbutton = document.getElementById("close");

	if(obutton && cbutton) {
		obutton.onclick = newwindow;
		cbutton.onclick = closewindow;
	}
}

var newwin ;
function newwindow() 
{
	
	newwin = window.open("","","height = 300, width = 300");
	newwin.document.write("Welcome, in the new window!!");
	newwin.focus();
}

function closewindow()
{
	if(newwin) {
		newwin.close();
		newwin = null;
	}
}
