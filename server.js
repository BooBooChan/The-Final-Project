//requiring the npm packages.
//using express, handlebars, mongo(ose), probably not php, because then you would need to use TDDs and perhaps Composer. Don't kill yourself here. 
var express = require("express");
var handlebar = require("express-handlebars");
var mongoose = require("mongoose");
var app = express();
var port = 5000;

//Connecting to MongoDB


//Routing

	//Routing the home page
	app.get("/").
	//Retrieving data from the server on the user input page.
	app.get("/userData").
	//Posting user-entered data from the user input page to the server.
	app.post("/userData").
	//Preparing to delete previously entered data if changes need to be made.
	app.delete("/userData").
	//Retrieving data from the server containing data posted from the user input page, ultimately to the reminder alert page
	app.get("/reminderAlert").
	//Posting supply refills from reminder alert page to the server.
	app.post("/reminderAlert").
	//Retrieving data from the server containing the shopping list database and posted supplies data from user data sheet.
	app.get("/shopping").
	//Posting data from userData sheet onto server.
	app.post("/shopping")
	//Preparing to delete previously posted supply data from user data sheet if changes need to be made.
	app.delete("/shopping")
	//Retrieing data from the server containing the weekly schedule database and posted schedule from user data sheet to the .
	app.get("/schedule")
	//Retrieving data from the server containing the posted recorded travel time from stopwatch page.
	app.get("/stopwatch").
	//Posting data from the stopwatch page onto server for data retrieval by the WeeklySchedule database.
	app.post("/stopwatch").
	//Preparing to delete previously posted travel times from stopwatch page if user presses the big red delete button.
	app.delete("/stopwatch").

//"Console.log"ging successful connection to the browser
if(){
	console.log("App is listening on localhost 5000.")
};
