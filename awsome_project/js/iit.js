function openNav() 
{
  document.getElementById("sideNav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  
}

function closeNav() 
{
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
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
