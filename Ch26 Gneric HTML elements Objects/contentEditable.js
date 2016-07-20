
function toggleEdit() {
	var newState = document.getElementById('editableText').contenEditable;
		if(newState == "false" || newState == false || newState == "inherit") {
			newState = true;
		} else {
			newState = false;
		}
		document.getElementById('editableText').contenEditable = newState;
		document.getElementById('editableText').className = (newState) ?"editing": "normal";
		document.getElementById('editButton').innerHTML = (newState) ? "Disable Editing": "Enable Editing";
}