 $(document).ready(function() {
 	//Click of the "signup" button will reveal signup form
 	$("#signup").hide();
	$("#reveal-signup").click(
		$("#reveal-signup").hide()
		$("#signup").show();
	);
	//Click of the "signup submit" button will add login info to database and direct user to weekly schedule page, in addition to hiding signup form on home page.
	$("#signup-submit").click(
		$("#signup").hide();
	);
	//Click of "add contact" button will empty "new contact" form in case new contacts need to be filled, and add new contact to the "Contacts" db.
	//Make sure page immediately refreshes when a new contact is added.
	$("#contacts-submit").click(
		$(".contacts").empty();
	);
	//Click of "add item" button will empty "new item" form in case new shopping items need to be filled, and add new item to the "Shopping List" db.
	$(".shopping-item").click(
		$(".shopping-item").delete();
	);
	//Click of "delete" button will delete time slot from db, and delete <div> containing the time slot from the page.
	$(".delete-time-slot-button").click(
		$(".delete-time-slot").delete();
		//Make sure MySQL also deletes item from DB. 
		);
};

