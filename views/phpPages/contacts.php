<h2>Contacts</h2>
		<p>You might want to record the contact information of people you will want to reach quickly and easily. Try not to deal with your patient's medical emergencies alone. You can contact hospitals, friends/relatives ready to help, local pharmacies, etc.</p>

		
		
		<ol>
			<div class = "contact-entry-box">
				<li class = "contact-entry">
					<?php
						$_GET[/*insert MySQL contacts database here*/];
						for($i = 0; i < length./*contacts database*/; i ++){
							echo i;//Preferrably insert "contact-entry-box" element for each contact.
						};
					?>			
				</li>
			</div>
		</ol>
		<!--This is where user can enter important contacts-->
		<form id = "new-contact" action = "/phpPages/contacts.php" method = "post">
			<input class = "contacts" name = "name" placeholder = "Name">
			
			<input class = "contacts" name = "phoneCountry" placeholder = "Country Code">
			<input class = "contacts" name = "phoneArea" placeholder = "Area Code">

			<p>Please do not put spaces or hyphens between the digits in your main number. Our databases will hyphen-space them in standard "xxx-xxxx" format.</p>
			
			<input class = "contacts" name = "phoneMain" placeholder = 7-Digit Main Number">
			<input class = "contacts" name = "fax" placeholder = "Fax Number">
			<input class = "contacts" name = "faxCountry" placeholder = Country Code">
			<input class = "contacts" name = "faxArea" placeholder = "Area Code">
			<input class = "contacts" name = "faxMain" placeholder = 7-Digit Main Number">

			<input class = "contacts" name = "location" placeholder = "Address">
			<input class = "contacts" name = "email" placeholder = "Email">

			<button id = "contact-submit" type = "submit" action = "/phpPages/contacts.php" method = "post">Enter new contact</button>

		<!--Make sure to include a feature that user can use to prioritize contacts.-->

		</form>
		