
document.getElementById("menu").addEventListener("click", function()
{
    var navSize = document.getElementById("sideNav").style.width;
    if (navSize == '250px' || navSize == '100px') 
		{
        return closeNav();
    }
    return openNav();
});

function openNav() 
{
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
				
	var deviceWidth = window.innerWidth;
	
	switch(true)
	{
		case (deviceWidth < 500):
			document.getElementById("sideNav").style.width = "100px";
			document.getElementById("main").style.marginLeft = "100px";
		break;
	
		default:
			document.getElementById("sideNav").style.width = "250px";
			document.getElementById("main").style.marginLeft = "250px";
		break;
	}
}

function closeNav() 
{
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
	document.body.style.backgroundColor = "white";
}

function openPage(page) 
{
    var i;
    var x = document.getElementsByClassName("pages");
    for (i = 0; i < x.length; i++) 
    {
        x[i].style.display = "none"; 
    }
    document.getElementById(page).style.display = "block"; 
}
