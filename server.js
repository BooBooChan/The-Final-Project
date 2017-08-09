//requiring the npm packages.
//using express, handlebars, mongo(ose), probably not php, because then you would need to use TDDs and perhaps Composer. Don't kill yourself here. 
var express = require("express");
var handlebar = require("express-handlebars");
var mongoose = require("mongoose");
var app = express();
var port = 5000;

//Connecting to MongoDB
mongoose.connect("mongodb://localhost/my_database");
//Checking for errors when server is run
var db = mongoose.connection;//.connection: NOT to be confused with .connect()
db.on("error", console.error.bind(console, "we detected a connection error:"));
db.once("open", function(){
	console.log("Good news! Connection to MongoDB successful.");

	//All remaining Mongoose callbacks are written inside these once() function parameter brackets.
	var Login = require("./models/Login.js");
	var SupplyQuantity = require("./models/SupplyQuantity.js");
	var ShoppingList = require ("./models/ShoppingList.js");
	var MealPlans = require("./models/MealPlans.js");
	var Contacts = require("./models/Contacts.js");
	var WeeklySchedule = require("./models/WeeklySchedule.js");
	//var TravelRoutes = require("./models/SmoothTravelRoutes.js");
	var Demo = require("./models/Demo.js");
};

	
//Establishing handlebars layout
app.engine("handlebars", handlebar({defaultLayout: "main"}));
app.set("view engine", "handlebars");


//Routing

//Routing the home page
app.get("/", function(req, res){
	//Rendering the home handlebar page onto the home url page
	res.render("home", {});
});
//Posting user-entered data from the home page onto the server.
app.post("/" ,function(req, res){

});
//Retrieving and storing all login users' signup information
app.get("/:user", function(req, res){//If the "?" of optional parameters is entered, then the server would get confused which app.get() command to run when two are "get"ting server data from possibly the same url "/".
	//Sending data from server as per user's request in url to browser.
	res.send("/" + req.params.user);
});
//Retrieving data from the server on the user input page
app.get("/userData", function (req, res){
	//Rendering the userData handlebar page onto the userDATA url page
	res.render("userData", {});
});
//Posting user-entered data from the user input page to the server
app.post("/userData", function(req, res){

});
//Preparing to delete previously entered data if changes need to be made
app.delete("/userData", function(req, res){

});
//Retrieving data from the server containing data posted from the user input page, ultimately to the reminder alert page
app.get("/reminderAlert", function(req, res){
	//Rendering the reminderAlert handlebar page onto the reminderAlert url page
	res.render("reminderAlert", {});
});
//Posting supply refills from reminder alert page to the server
app.post("/reminderAlert", function(req, res){

});
//Retrieving data from the server containing the shopping list database and posted supplies data from user data sheet.
app.get("/shopping", function(req, res){
	//Rendering the shopping handlebar page onto the shopping url page.
});
//Posting data from userData sheet onto server
app.post("/shopping", function(req, res){

});
//Preparing to delete previously posted supply data from user data sheet if changes need to be made.
app.delete("/shopping", function(req, res){

});
//Retrieing data from the server containing the weekly schedule database and posted schedule from user data sheet to the .
app.get("/schedule", function(req, res){
	//Rendering the weekly schedule handlebar page onto the schedule url page.
});
//Posting data from userData sheet onto server.
app.post("/schedule", function(req, res){

});
//Retrieving data from the server containing the posted recorded travel time from stopwatch page.
app.get("/stopwatch", function(req, res){
	//Rendering the patient travel stopwatch handlebar page onto the stopwatch url page.
});
//Posting data from the stopwatch page onto server for data retrieval by the WeeklySchedule database.
app.post("/stopwatch", function(req, res){

});
//Preparing to delete previously posted travel times from stopwatch page if user presses the big red delete button.
app.delete("/stopwatch" function(req, res){

});
	

//"Console.log"ging successful connection to the browser
if(){
	console.log("App is listening on localhost 5000.");
};