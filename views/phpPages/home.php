<!--Begin home page by describing what app is designed to do-->
<div class = "col-s12">
	<!--Home Page Title-->
	<h2>Overwhelmed while caring for a sick friend in need on short notice? </h2>
	<p>No need to panic. This app is designed to make your money and time budget easier for you. Your daily schedule and spendings can change drastically when misfortune strikes unexpectedly and your friend and/or relative is too sick to take care of himself.
	</p>


	<?php 
	//The "method" specified in the form already posted the login data to the server. Now we respond accordingly.
	// //Making queries to MySQL to add login data where necessary.
	// function signup(){
	// 	//Connecting to MySQL for database access

	$servername = "localhost";
	$port = 3306;
	$username = "root";
	$password = "";
	$database = "User";

	$connection = new mysqli($servername, $port, $username, $password, $database);
	if(!$conn){
		die("Connection failed" . mysqli_connect_error());
	};
	echo "MySQLi is now connected! Wahay!"

	$login_entry = "SELECT username, password FROM Login";//This is not the MySQL query, just instructions prepared for an upcoming query.
	$login_query = $connection -> query($login_entry);//THIS is the query dictated by the above instructions.

	//"For" looping through Login table to match with user-entered login data
	while($row = $login_query -> fetch_assoc()) {//Okay, so what I think will happen based on my research is that the query will display each array as key/value entries.
		if($row["username"] === $_POST["username"] && $row["password"] === $_POST["password"]){
			header("Location: localhost:7000/weeklySchedule");
			exit();
		};//end "if" statement
		else{
			echo("Invalid username and/or password. Please try again.")
		};//end "else" statement
	};//end "while" statement



	// 	var connection = mysql.createConnection({
	// 	  host: "localhost",
	// 	  port: 3306,

	// 	  // Your username
	// 	  user: "root",

	// 	  // Your password
	// 	  password: "",
	// 	  database: "User"
	// 	});//End connection variable definition

	// 	connection.connect(function(err) { //Keep queries inside this object.
	// 		if (err) throw err;
	// 		console.log("connected as id " + connection.threadId + "\n");
	// 		insertCrud();//Function TBD
	// 		//Connecting mySQL queries to proper HTML elements
	// 		var loginDrop = "DROP TABLE `login` IF EXISTS"
	// 		var loginInsert = "INSERT INTO `Login` (first_name, last_name, username, email, password, password_hint) VALUES ?"; //"SET ?" meaning... "WHERE ?" meaning...
	// 		var loginValues = [
	// 		//This is where users' input in login form will be entered. Find proper MySQL functions
	// 		//It'd be nice if I could summon data from the demonstration example. But how? Hmmmm...
	// 		];
	// 		connection.query(
	// 			loginDrop, loginInsert, [loginValues], function(err, result){
	// 				if (err) throw err;
	// 				console.log("Number of rows affected in `Login`: ", result.affectedRows);
	// 			});//End connection.query
	// 	});//End connection.connect		
	// };//End function signup
	// if(
	// 	$_POST["username"] === /*MySQL username here*/ && $_POST["password"] === /*MySQL username here*/){
	// 	header("Location: localhost:7000/weeklySchedule");
	// 	exit();
	// }else{
	// 	echo "Invalid username and password. Please try again."
	// };
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
