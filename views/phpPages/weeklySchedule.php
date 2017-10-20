		<h2>Your Weekly Schedule</h2>
		<p>Based on all the information you entered in the User Input Page, below is a schedule of your work and other commitments throughout the week. Wherever you have the spare time left for each day, you can insert time slots to dedicate to your patient (or else just take things easy for a while. You'll deserve a break after your hard work) by entering the time slot form below. If your schedule ever changes, you can always edit the Weekly Schedule database in the User Data page.</p>

		<form id = "new-schedule-slot" action = "/phpPages/weeklySchedule.php" method = "post">
			<input name = "appointment" placeholder = "Name of appointment?">
			<input name = "day" placeholder = "What days of the week?">
			<input name = "time" placeholder = "What times?">
			<button id = "schedule-submit" type = "submit">Enter New Weekly Schedule Slot</button>
		</form>

		<?php
			for($i = 0; $i < /*schedule MySQL db*/.length; $i++){
			echo $_GET[$i];
			};
		?>
		<table>
			<tr>
				<th>Sunday</th>				
				<th>Monday</th>
				<th>Tuesday</th>
				<th>Wednesday</th>
				<th>Thursday</th>
				<th>Friday</th>
				<th>Saturday</th>
			</tr>
			<tr>
				<td>
					<?php
						for($j = 0; $j < /*MySQL Sunday appointments*/.length; $j++){
							echo "<div class = \"delete-time-slot\">" .  $_GET[$j] . "<button class = \"delete-time-slot-button\">DELETE</button></div>";
						};
					?>
				</td>
				<td>
					<?php
						for($j = 0; $j < /*MySQL Monday appointments*/.length; $j++){
							echo "<div class = \"delete-time-slot\">" .  $_GET[$j] . "<button class = \"delete-time-slot-button\">DELETE</button></div>";
						};
					?>
				</td>
				<td>
					<?php
						for($j = 0; $j < /*MySQL Tuesday appointments*/.length; $j++){
							echo "<div class = \"delete-time-slot\">" .  $_GET[$j] . "<button class = \"delete-time-slot-button\">DELETE</button></div>";
						};
					?>
				</td>
				<td>
					<?php
						for($j = 0; $j < /*MySQL Wednesday appointments*/.length; $j++){
							echo "<div class = \"delete-time-slot\">" .  $_GET[$j] . "<button class = \"delete-time-slot-button\">DELETE</button></div>";
						};
					?>
				</td>
				<td>
					<?php
						for($j = 0; $j < /*MySQL Thursday appointments*/.length; $j++){
							echo "<div class = \"delete-time-slot\">" .  $_GET[$j] . "<button class = \"delete-time-slot-button\">DELETE</button></div>";
						};
					?>
				</td>
				<td>
					<?php
						for($j = 0; $j < /*MySQL Friday appointments*/.length; $j++){
							echo "<div class = \"delete-time-slot\">" .  $_GET[$j] . "<button class = \"delete-time-slot-button\">DELETE</button></div>";
						};
					?>
				</td>
				<td>
					<?php
						for($j = 0; $j < /*MySQL Saturday appointments*/.length; $j++){
							echo "<div class = \"delete-time-slot\">" .  $_GET[$j] . "<button class = \"delete-time-slot-button\">DELETE</button></div>";
						};
					?>
				</td>
			</tr>
		</table>