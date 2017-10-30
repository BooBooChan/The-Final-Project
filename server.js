//requiring the npm packages.
//using express, handlebars, mongo(ose), probably not php, because then you would need to use TDDs and perhaps Composer. Don't kill yourself here. 
var express = require("express");
var handlebar = require("express-handlebars");
// var mongoose = require("mongoose");
var app = express();
var port = 7000;
var mysql = require("mysql");
// const mysql = import mysql from "mysql";
// var SQLize = require("sequelize");

// //Connecting to MongoDB
// mongoose.connect("mongodb://localhost:7000/Login");
// //Checking for errors when server is run
// var db = mongoose.connection;//.connection: NOT to be confused with .connect()
// db.on("error", console.error.bind(console, "we detected a connection error:"));
// db.once("open", function(){
// 	console.log("Good news! Connection to MongoDB successful.");

// 	//All remaining Mongoose callbacks are written inside these once() function parameter brackets.
// 	var Login = require("./models/Login.js");
// // 	var SupplyQuantity = require("./models/SupplyQuantity.js");
// // 	var ShoppingList = require ("./models/ShoppingList.js");
// // 	var MealPlans = require("./models/MealPlans.js");
// // 	var Contacts = require("./models/Contacts.js");
// // 	var WeeklySchedule = require("./models/WeeklySchedule.js");
// // 	//var TravelRoutes = require("./models/SmoothTravelRoutes.js");
// // 	var Demo = require("./models/Demo.js");
// });

// //Setting up Sequelize
// 	const sequelize = new Sequelize("SecondFirstAid", "root", "root", {
// 		host:"localhost",
// 		dialect:"mysql",
// 		pool: {
// 			max: 5,
// 			min: 0,
// 			idle: 10000
// 		}
// 	});
// //Testing connection for sequelize
// 	sequelize.authenticate().then(() => {
// 		console.log()
// 	})

//Establishing handlebars layout
app.engine("handlebars", handlebar({defaultLayout: "main"}));
app.set("view engine", "handlebars");


//Routing

//Routing the home page
app.get("/", function(req, res){
	// Rendering the home handlebar page onto the home url page
	res.render("home");
	//Hiding the signup form from site as default position.
	// Login.find({}, function(error, welcome){
	// 	if(error){
	// 		res.send(error);
	// 	} else{
	// 		Login.findOne({""})

	// 		};
	// 	}
	// })

});
//Posting user-entered data from the home page onto the server.
app.post("/", function(req, res){

	
	//Making queries to MySQL to add login data where necessary.
	function signup(){
		//Connecting to MySQL for database access

		var connection = mysql.createConnection({
		  host: "localhost",
		  port: 3306,

		  // Your username
		  user: "root",

		  // Your password
		  password: "",
		  database: "User"
		});//End connection variable definition

		connection.connect(function(err) { //Keep queries inside this object.
			if (err) throw err;
			console.log("connected as id " + connection.threadId + "\n");
			insertCrud();//Function TBD
			//Connecting mySQL queries to proper HTML elements
			var loginDrop = "DROP TABLE `Login` IF EXISTS"
			var loginInsert = "INSERT INTO `Login` (first_name, last_name, username, email, password, password_hint) VALUES ?"; //"SET ?" meaning... "WHERE ?" meaning...
			var loginValues = [
			//This is where users' input in login form will be entered. Find proper MySQL functions
			//It'd be nice if I could summon data from the demonstration example. But how? Hmmmm...
			];
			connection.query(
				loginDrop, loginInsert, [loginValues], function(err, result){
					if (err) throw err;
					console.log("Number of rows affected in `Login`: ", result.affectedRows);
				});//End connection.query
		});//End connection.connect		
	};//End function signup
});//End app.post("/")

//Retrieving and storing all login users' signup information
app.get("/:user", function(req, res){//If the "?" of optional parameters is entered, then the server would get confused which app.get() command to run when two are "get"ting server data from possibly the same url "/".
	//Sending data from server as per user's request in url to browser.
	res.send("/" + req.params.user);
});

//Retrieving data from the server on the weekly schedule page
app.get("/weeklySchedule", function(req, res){
	//Rendering the Weekly Schedule handlebar page onto the Weekly Schedule url
	res.render("weeklySchedule");
});
//Posting user-entered login info to the server
app.post("/phpPages/home.php", function(req, res){
//So it seems like the website needs post commands both on this page and on the home handlebars page in order for home.php to send data to the server and take login data.
});
// //Retrieving data from the server on the user input page
// app.get("/userData", function (req, res){
// 	//Rendering the userData handlebar page onto the userDATA url page
// 	res.render("userData", {});
// });
// //Posting user-entered data from the user input page to the server
// app.post("/userData", function(req, res){

// });
// //Preparing to delete previously entered data if changes need to be made
// app.delete("/userData", function(req, res){

// });
// //Retrieving data from the server containing data posted from the user input page, ultimately to the reminder alert page
// app.get("/reminderAlert", function(req, res){
// 	//Rendering the reminderAlert handlebar page onto the reminderAlert url page
// 	res.render("reminderAlert", {});
// });
// //Posting supply refills from reminder alert page to the server
// app.post("/reminderAlert", function(req, res){

// });
// //Retrieving data from the server containing the shopping list database and posted supplies data from user data sheet.
// app.get("/shopping", function(req, res){
// 	//Rendering the shopping handlebar page onto the shopping url page.
// });
// //Posting data from userData sheet onto server
// app.post("/shopping", function(req, res){

// });
// //Preparing to delete previously posted supply data from user data sheet if changes need to be made.
// app.delete("/shopping", function(req, res){

// });
// //Retrieing data from the server containing the weekly schedule database and posted schedule from user data sheet to the .
// app.get("/schedule", function(req, res){
// 	//Rendering the weekly schedule handlebar page onto the schedule url page.
// });
// //Posting data from userData sheet onto server.
// app.post("/schedule", function(req, res){

// });
// //Retrieving data from the server containing the posted recorded travel time from stopwatch page.
// app.get("/stopwatch", function(req, res){
// 	//Rendering the patient travel stopwatch handlebar page onto the stopwatch url page.
// });
// //Posting data from the stopwatch page onto server for data retrieval by the WeeklySchedule database.
// app.post("/stopwatch", function(req, res){

// });
// //Preparing to delete previously posted travel times from stopwatch page if user presses the big red delete button.
// app.delete("/stopwatch" function(req, res){

// });
	

// //"Console.log"ging successful connection to the browser
// if(){
// 	console.log("App is listening on localhost 5000.");
// };

// Remembering to make node.js Listen for http requests



app.listen(7000, function() {
    console.log('App is listening on localhost', 7000);
});