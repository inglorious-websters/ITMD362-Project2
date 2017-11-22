
/*Log in script */

// Variable to count number of attempts.
var attempt = 3; 

// Below function Executes on click of login button.
function validate()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if ( username == "Peter" && password == "123")
	{
		alert ("Login successfully");
		var valid = true;
	}
	else
	{
		attempt --;// Decrementing by one.
		alert("You have left "+ attempt +" attempt;");
		// Disabling fields after 3 attempts.
		form.rest();
		if( attempt == 0)
		{
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("login").disabled = true;
			alert("Account Locked, contact OTS for assitance");
		}
	}
	
 if(valid) 
 {
    window.location = 'academics.html'; // your desired location
 }
 return false;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myTopNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function clear(form)
{
	form.reset();
}