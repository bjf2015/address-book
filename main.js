/*******

-allow users to create an store contacts 
-once users adds contacts should see list of contacts underneath input
-user should be able to click contact to view their information on side of the form

-each contact should be stored as an object with a number of properties
-submitting a form should create a new object with whatever properties are submitted
	-user should not be able to submit a new contact w/o min info (name)

-EXTRA create edit contact option


******/
var addressBook;
var addressBookPerson;

$(document).ready(function(){






// create a new object function that inherits structured object

// append list item with user named wrapped around a link/button and when clicked shows detailed information.
	//new list item will be created and added to ul class="contact-list".

//create a contact link that shows contact name and when clicked displays contact information.
//display new contact information in detail

var addressBook = new Array();



var addressBookPerson = function(firstName, lastName, phoneNumber, street, city, state) {
	this.firstName= firstName;
	this.lastName= lastName;
	this.phoneNumber= phoneNumber;
	this.street= street;
	this.city= city;
	this.state= state;

};

var Bryan = new addressBookPerson("Bryan", "Franzoi", "312-965-3100","42 West 3rd", "LV", "NV");
addressBook[0] = new addressBookPerson;
console.log(addressBook)
/


//create add button functionality	

$( "#add-button" ).click(function(event) {
	event.preventDefault();
	//addressBookName.push($('#firstName').val());
	addressBook.push( new addressBookPerson($('#firstName').val(), $('#lastName').val(), $('#phoneNumber').val(),
											 $('#street').val(), $('#city').val(), $('#state').val()));

	console.log(addressBook);
	//$('#contacts-form').html('');

});

});