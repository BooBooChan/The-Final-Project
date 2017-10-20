		<h2>Meal Plan</h2>
		
		<p>What you might not know about the changes in your lifestyle when caring for the sick is how much your grocery shopping list piles up and changes, and that's not counting the medical supplies and arrangements made around your patient's living space. In order to keep your weekly grocery shopping affordable, we highly advise you schedule a meal plan for both yourself and your patient.</p>
		<p>The special dietary needs you entered into the main User Data page are automatically added to a separate Meal Plan database, which we will place below the main Meal Plan database. But now you need to include and budget your own meals.</p>

		<p>What can't your patient eat/digest? What specifically does he/she NEED to eat? How much can he/she eat in one meal? All of that needs to be taken into account when you're shopping for food in order to avoid waste. This page can function as a shopping list when you construct a meal plan. You might not have the funds to eat as much junk food as you would like, but with proper budgeting and patience, you'll be able to save enough spare cash to treat yourself occasionally. Now let's blow the dust off our cookbooks and start planning!</p>

		<?php
			$_GET[/*insert MySQL mealplan database here*/];
			for($i = 0; $i < length./*mealplan entries*/; $i++){
				echo $i;
			};
		?>


		<!--This is where we enter the 2 databases: regular MealPlans and Special Meal Plans-->

		<div class = "meal-plan-slot">
			
		</div>

		<!--This is where user enters the meal plan data-->
		<form id = "new-meal-plan" action = "/phpPages/mealPlans.php" method = "post">
			<input class = "meal-plan" name = "dayOfTheWeek">

			<!--This, as in, "breakfast", "lunch", or "dinner"-->
			<input class = "meal-plan" name = "meal">
			<!--Offer an option to change "meal" into "special need"-->
			<input class = "meal-plan" name = "mealTime">
			<input class = "meal-plan" name = "ingredients">
			<input class = "meal-plan" name = "ingredientquantity">
			<input class = "meal-plan" name = "servingsPerMeal">
			<input class = "meal-plan" name = "estimatedPrepTime">

			<!--Translation: How long does the food keep?-->
			<input class = "meal-plan" name = "estimatedPreserveTime">
			<button id = "meal-plan-submit" type = "submit">Save Meal Plan</button>

		</form>
		<p>Enter your patient's special dietary needs here!</p>
		<form id = "new-diet-need" action = "/phpPages/mealPlans.php" method = "post">
			<!--So if not recording a meal, then...-->

			<input class = "meal-plan" name = "foodGroupOrNutrientAssociated" placeholder = "Enter the nutrient or food group associated.">
			<input class = "meal-plan" name = "digestible">
			<input class = "meal-plan" name = "additionalInfo" placeholder = "Any additional information about this dietary need?">
			<!--So if patient can't drink lactose, app should put lactose products in a "do not buy" list. If patient needs extra calcium, app puts calcium products onto list of special foods to buy.-->
			<button id = "diet-need-submit" type = "submit"></button>
		</form>





		<p>Budget tip: It's generally far more cost efficient to make meals from scratch than to buy packages of prepared foods or order from restaurants (yes, even fast food). A loaf of bread, a half-gallon of milk, and a 16oz jar of peanut butter can make 15 meals; that's 5 days worth of food!</p>