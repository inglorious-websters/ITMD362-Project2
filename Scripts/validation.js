function myForm(form) {
	var userName = form.name.value;
	var userPassword = form.password.value;
	var x = userName.localeCompare("mlindemann");
    var y = userpassword.localCompare("panda");

	if(x = 0 && y = 0) {
		return true;
	}

	else {
		alert("This username/password is incorrect.");
		return false;
	}

}