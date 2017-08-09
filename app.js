//THE FRONT END CODE!
$(document).ready(function(){
	//Revealing the sign up page
	function loginToSignup(){
		var signup = $("#signup");
		var login = $("#login");
		var revealSignup = $("#reveal-signup");
		//Initializing signup form to be hidden from user view
		$("signup").hide();
		//Triggering login form to hide and signup form to appear in its place
		$("signup").click(function(){
			$("login").hide();
			$("signup").show();
		});//Considering creating an event to switch back to login if user changes his/her mind.
	};
	//Assigning START button on stopwatch to start timer
	function START(){
		var start = $("#stopwatch-start");
		var stop = $("#stopwatch-stop");
		$("stop").hide();
		$("start").click(){
			//Creating timer which counts up indefinitely

			//Replacing START button with STOP button

			$("start").hide();
			$("stop").show();//It might be better to change the innerHTML inside the button rather than creating 2 buttons and interchanging them.
			//Alt: $("start").empty();
			//	$("start").append("STOP");
			//	
		};
	};
	//Assigning STOP button on stopwatch to stop and save timer.
	function STOP(){
		var stop = $("#stopwatch-stop");
		$("stop").click(){
			//
		};
	};

	//Setting Reminder Alerts to go off
	$ajax({
		method:"GET",
		url:"/reminderAlert"//When you get the data from "/reminderAlert", you should have the saved SupplyQuantity databases saved in the server by now.
	//Reminding user of low/empty supplies. Since we have array of function, we need to for() loop through them.
	}).done([function alertFlash(){
		//Redirecting user to reminder alert page immediately after login if reminders are present.
		
	}, function needsRefill(){
		if(/*Supply days remaining =< 5 according to supply SupplyQuantity database*/){
			//Showing the low supply caution reminder
			$("caution").append("Caution:");
			$("describeCaution").append("(insert supply here) will last only (integer between 4 and 5) days at the rate of the regular dosage. Be prepared to refill supplies.");
		};
		if(/*Supply days remaining < 3 according to supply SupplyQuantity database*/){
			//Showing the sharply low supply warning reminder
			$("warning").append("Warning:");
			$("describeWarning").append("(insert supply here) will last only (integer between 1 and 3) day(s) at the rate of the regular dosage. Be prepared to refill supplies ASAP, especially if your local store closes all weekend.");
		};
		if(/*Supply days remaining =< 0 according to supply SupplyQuantity database*/){
			//Showing the empty supply danger reminder
			$("danger").append("Danger:");
			$("describeDanger").append("Our databases tell us" + /*<strong>*/ + "you are out of (insert supply here)." + /*</strong>*/ + "Make sure to refill supplies ASAP!");
		};
	},
	//Allowing user to notify app of refilled supplies.
	function refill(){
		$("h3").click(){
			//Sending "completed refill" notice to app with click of low supply label.
			$(this).empty();
			$("p").empty();
			$(this).prepend("Okay! How many dosages of (insert supply here) do you now have?");
			$("<form></form>").appendTo("p");
			$("<input value = Integer placeholder = dosage number>").appendTo("form");
			$("<submit>Update my supply database!</submit>").appendTo("form");
			$("submit").click(){
				//posting update to server. Review how to update w/ MongoDB and Mongoose.
				$("p").empty();
				$("p").append("Good! You now have (insert entered dosage / dosages per day) days' worth of (insert supply here). We will be ready to inform you when you run short again.");
			};


		};
	},
	]);
});