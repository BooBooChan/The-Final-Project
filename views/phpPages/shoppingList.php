		<h2>Shopping List</h2>
		<p>This should help you keep track of which items you still need to buy for your patient.</p> 

		<!--This is where we will insert the shopping list DB from the Shopping List model-->
		<div id = "shopping-list">
			<ul>
				<?php
					for($i = 0; $i < /*MySQL shopping list db */; $i++){
				?>
				
				<?php
					echo "<li class = 'shopping-item'>" . 
					$_GET[/*MySQL code here with entered items*/];
					if(/*medical supplies need to be refilled*/){
						$_GET[/*low supplies*/];
					};
					$_GET[/*dietary needs*/];
					} . 
					echo "</li>";
				?>
			</ul>
			<p><strong>
			DO NOT GET:
			<ul>
				<?php
					for(/*each entered indigestible good*/){
					echo "<li>" . 
					$_GET[/*indigestible goods and medicines*/] . 
					echo "</li>";
					};
				?>
			</ul>				
			</strong>... unless you wanna eat these tasty goods in front of your patient. Then it's okay I guess.
			</p>
		</div>

		<p> While not at the top of the priority list, we advise also that you supply your patient with enough sedentary entertainment while he/she is laid up in bed and you need to be away for hours at a time (esp work). Coming home to a stir-crazy, depressed patient is no fun for anyone, and he/she will need a positive attitude to recover optimally. See if you can find ways to keep him/her distracted from the constant reminder of being confined to a single posture in a single room. Such ways can include movies, activity books, book-books, wall decorations, music, or anything else you might come up with. Use your own judgment here; you know your patient better than we do.</p>

		<!--This is where the user will enter daily schedule and enter a budget reserved for first-aid patient care (not counting hospital bills... pay your own damn bill, patient!).-->
<div class = "row">
	<div class = "col s12">
		<h2>What is your current budget?</h2>
		<p>The following form is where you can enter your spending limits and your current time commitments so that we can find the most feasible times for you to commit to your patient's recovery and to suggest ways to save and spend your money reserve carefully.</p>

		<form id = "new-shopping-items" action = "/phpPages/shoppingList.php" method = "post">
			<p>Reserve an amount of money for patient care. What's the largest feasible weekly budget for you?<br>
			$<input name = "maximumBudget" placeholder = "Max weekly budget"> per week</p>
			<p>Anything else you need which we didn't include? All of our listed items are related to your patient, but you're welcome to add your regular shopping items to keep a single organized list together.<p>
			<input name = "additionalItems" placeholder = "Additional List Items">
			<button id = "shopping-submit" type = "submit"></button>
		</form>
	</div>
</div>
		