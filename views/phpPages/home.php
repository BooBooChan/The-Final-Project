<!--Begin home page by describing what app is designed to do-->
<div class = "col-s12">
	<!--Home Page Title-->
	<h2>Overwhelmed while caring for a sick friend in need on short notice? </h2>
	<p>No need to panic. This app is designed to make your money and time budget easier for you. Your daily schedule and spendings can change drastically when misfortune strikes unexpectedly and your friend and/or relative is too sick to take care of himself.
	</p>


	<?php 
	//The "method" specified in the form already posted the login data to the server. Now we respond accordingly.
	if(
		$_POST["username"] === /*MySQL username here*/ && $_POST["password"] === /*MySQL username here*/){
		header("Location: localhost:7000/weeklySchedule");
		exit();
	}else{
		echo "Invalid username and password. Please try again."
	};
	?>

	<form id = "signup" action = "../phpPages/home.php" method = "POST">
		<input name = "firstName" placeholder = "First Name">
		<input name = "lastName" placeholder = "Last Name">
		<input name = "email" placeholder = "Email">
		<input name = "createPassword" placeholder = "Password">
		<button id = "signup-submit" type = "submit">Sign up</button>


		<!--You don't need to create a "confirm password" entry for this demo.-->

	</form>

	<?php
		//Insert mySQL data here to compile posted signup data into database.
		echo "<h3>Welcome," . $_POST["firstName"] . $_POST["lastName"] . "You may now log into our app with your username and password on the login sheet above.</h3>"
	?>
</div>
