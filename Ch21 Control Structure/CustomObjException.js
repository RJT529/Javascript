//window['onload'] = initialize;

function addEvent(elem, eventType,func) {
	if(elem.addEventListner) {
		elem.addEventListner(eventType,func,true);

	} else {
		elem["on" + eventType] = func;
	}
}
addEvent(window,'load',initialize);
function initialize() {
	//document.write('hello');
	obj = document.getElementById('getLetter');
	addEvent(obj,'click',getOutput);
	
}
var letters = ['A','B','C','D','E'];

function getErrorObject(msg) {
	var err = new Error(msg);
	err.name = 'My_Error';
	return err;
}
function getOutput() {
	

	try {
		var inputField = document.getElementById('inputNum');

		var inp = parseInt(inputField.value);

		var outputField = document.getElementById('output');
		
		if(isNaN(inp)) {
			throw getErrorObject("Entry was not number");
		}	
		
		if (inp < 1 || inp > 5) {
			throw getErrorObject('Enter only 1 through 5');
		}
		outputField.value = letters[inp-1];   //typo error in the name of the array will result in execution of the default statement
		
	} catch(e) {

		switch(e.name) {
			case 'My_Error':
				alert(e.message);
				outputField.value = "";
				inputField.focus();
				inputField.select();
				break;
			
			default: 
				alert('Reload the page and try again');
		}
	}

}
