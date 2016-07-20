function assignKey(type,elem) {
	//if(window.event) {
	//document.write("hello");
	//	if(window.event.keyCode == 13) {
		//document.write();
			switch(type) {
				case "button":
					//document.write('hello');
					document.getElementById('access1').accessKey = elem.value;
					break;
				case "text" :
					document.getElementById('acess2').accessKey = elem.value;
					break;
				case "table" :
					document.getElementById('myTable').accessKey = elem.value;
					break;
			}
			//return false;
	//	}
	//}
}