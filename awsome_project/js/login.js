
/*Log in script */

// Variable to count number of attempts.
var attempt = 3; 

// Below function Executes on click of login button.
function login()
{
	var password = document.forms['loginForm']['password'].value;
	
	if (password == "123")
	{
		alert ("Login successfully");
		return true;
	}
	else
	{
		document.forms['loginForm'].reset();
    attempt --;// Decrementing by one.
		alert("You have left "+ attempt +" attempt;");
		
    // Disabling fields after 3 attempts.
		if( attempt == 0)
		{
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("login").disabled = true;
			alert("Account Locked, contact OTS for assitance");
		}
    return false;
	}
}