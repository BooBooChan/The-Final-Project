<div class = "row">
	<div class = "col s12">
		<h2>Reminder Alert</h2>
	</div>
</div>

<!--This will caution the user when the supplies run short-->
<div class = "row">
	<div class = "col s12">
		<h3 onclick = "refill()" id = "caution" class = "insertYellowishColorHere">Caution:</h3> 
		<p id = "describeCaution">(insert supply here) will last only (integer between 4 and 5) days at the rate of the regular dosage. Be prepared to refill supplies.</p>
	</div>
</div>

<!--This will appear when supplies are dangerously low.-->
<div class = "row">
	<div class = "col s12">
		<h3 onclick = "refill()" id = "warning" class = "insertOrangishishColorHere">Warning:</h3> 
		<p id = "describeWarning">(insert supply here) will last only (integer between 1 and 3) day(s) at the rate of the regular dosage. Be prepared to refill supplies ASAP, especially if your local store closes all weekend.</p>
	</div>
</div>

<!--This will appear when supplies run out completely.-->
<div class = "row">
	<div class = "col s12">
		<h3 onclick = "refill()" id = "danger" class = "insertRedishColorHere">Danger:</h3> 
		<p id = "describeDanger">Our databases tell us you are out of (insert supply here). Make sure to refill supplies ASAP!</p>
	</div>
</div>
<div class = "row">
	<div class = "col s12">
		<form id = "refill" action = "/phpPages/reminderAlert.php" method = "post">
			<input name = "newQuantity" placeholder = "How many more dosages of (supply) did you get?">
			<button id = "refill-submit" type = "submit">Refill</button>
		</form>
	</div>
</div>
<div class = "row">
	<div class = "col s12">
	<!--This is where medicine and supplies can be measured according to initial amount and regular dosage/administration-->
		<form id = "new-refill-reminder" action = "phpPages/reminderAlert.php" method = "post">
			<h4>Enter all your medical supply information here. When it runs short (5 days' worth and under) We will post an alert to you on the Reminder Alert page.</h4>

			<!--This first input is multiple choice-->
			<input class = "reminder" name = "type">Medicine, food (according to patient's special diet. This will be automatically added to the MealPlans DB, but we're clustering special diet needs with medical needs to emphasize importance of proper, regular intake.), disposable tools (bandages, etc), exercise</input>
			<input class = "reminder" name = "item">
			<input class = "reminder" name = "startingCapacity">
			<input class = "reminder" name = "dosage" placeholder = "dosage (amount/day)">

			<!--This is where medicines and dosages will be recorded for the reminder alert page to remind patient when to take medicine. Specified time and days are recommended, but not required. -->
			<input class = "reminder" name = "scheduledReminder" placeholder = "Reminder Times (optional)">
		</form>

	</div>
</div>
<!--This will remind the patient of the therapeutic exercises-->
<div class = "row">
	<div class = "col s12">
		<!--This is where medicine and supplies can be measured according to initial amount and regular dosage/administration-->
		<form id = "new-exercise-reminder" action = "phpPages/reminderAlert.php" method = "post">
			<h4>Enter all your exercise routines here. We will post an alert to you on the Reminder Alert page.</h4>

			<!--This first input is multiple choice-->

			<!--Name of exercise-->
			<input class = "reminder" name = "type" placeholder = "What type of exercise are you performing?">
			<!--Allow user to add day/times for exercise-->
			<!--Day of week-->
			<input class = "reminder" name = "day" placeholder = "What days would you like us to remind you?">
			<!--Time-->
			<input class = "reminder" name = "time" placeholder = "What time would you like us to remind you?">
			<input class = "reminder" name = "duration" placeholder = "How long is each set of exercises?">

			<!--This is where medicines and dosages will be recorded for the reminder alert page to remind patient when to take medicine. Specified time and days are recommended, but not required. -->
			<input class = "reminder" name = "scheduledReminder" placeholder = "Reminder Times (optional)">
		</form>

		<h3 class = "insertGreenishColorHere">Time to get active and recover!</h3>
		<p></p>
		
		<!--This is where you would insert the timer according to the respective scheduled exercise. Some javascript will be required here. Review how to create timers.-->

	</div>
</div>
