<!DOCTYPE html>
<html lang='en' class='nojs'>
  <head>
    <meta charset='UTF-8'>
    <title>Illinois Institute of Technology</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' media='screen' href='css/reset.css'/>
    <link rel='stylesheet' media='screen' href='css/normalize.css'/>
    <link rel='stylesheet' media='screen' href='css/global.css' />
    <link rel='stylesheet' media='screen' href='css/iit.css' />
    <script src='js/iit.js'></script> 
  </head>
  
  <body>
    <div id='sideNav' class='nav'>
      <p class='closebtn' onclick='closeNav()'>&times;</p>
      <p onclick="closeNav(); openPage('Welcome')">Welcome</p>
      <p onclick="closeNav(); openPage('Academics')">Academics</p>
      <p onclick='closeNav()'>Student Life</p>
      <p onclick='closeNav()'>Work</p>
      <p onclick='closeNav()'>Library</p>
      <p onclick='closeNav()'>Research</p>
      <p onclick='closeNav()'>My Stuff</p>
      <p onclick='closeNav()'>Training and Support</p>
    </div>
    <div id='main'>
      <div id='iitBanner'>
         <span id='menu' onclick='openNav()'>&#9776;</span>
        <div id='iitBannerBG'>
          <img src='img/header_blk_red.gif' alt='IIT banner'>
        </div>
      </div>
      <div id="account">
        <span>
          <a href="#">My Account</a>
          <a href="#">Content Layer</a>
        </span>
      <div id ='userInfo'> 
        <p>Welcome: <?php echo $_POST['user_name']; ?></p>
        <p>You are Currently Signed in</p>
      </div>
    </div>
    <div id='content'>
      <div id ='Welcome' class='pages'>
        <h1>IIT Welcome Page</h1>
      </div>
       <div id ='Academics' class='pages'>
         <div id='profile'>
            <img src="img/Academics_AcademicProfile.png" alt="AcademicProfile">
          </div>
          <div id="regrsitration">
            <h1>Regrsitration Tools</h1>
						<p><a href="img/RegistrationStatus.png">Registration Status</a></p>
						<p><a href="img/LooUpClasses.png">Look Up Classes</a></p>
						<p><a href="img/AddDropClasses.png">Add or Drop Classes</a></p>
						<p><a href="img/ChangeClassOptions.png">Change Class Options</a></p>
						<p><a href="img/WeekAtGlance.png">Week at a Glance</a></p>
					</div>
          <div class="banner">
							<img src="img/Academics_Banner.png" alt="Academic_Banner">		
						</div>
        </div>
      </div>
    </div>
  </body>
</html>