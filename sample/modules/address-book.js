/**
 *Description: This module manages models a simple address book with
 *			   a set of CRUD operations.
 */

var AddressBook={};

(function(){

	/**
	 * The function adds a single contact to the address book 
	 * @options: A JSON object describing a single contact
	 * @return: If the contact is added successfully a JSON representation
	 * is provided,else null
	 */
	var addContact=function(options){

	};

	/**
	 * The function will remove the contact described by the provided options 
	 * object
	 * @param  A JSON object describing the contact to be removed
	 * @return True if the contact is removed,else false
	 */
	var removeContact=function(options){

	};

	/**
	 * The function updates the details of the contact described in the provided
	 * options object
	 * @param  A JSON object describing a contact
	 * @return True if the contact is added successfully,else false
	 */
	var editContact=function(options){

	};

/**
 * The function searches for a contact based on the criteria provided in the options
 * object
 * @param  A JSON object containing the criteria for the search
 * @return An array of contacts
 */
	var search=function(options){
		return [];
	};


	AddressBook.addContact=addContact;
	AddressBook.removeContact=removeContact;
	AddressBook.editContact=editContact;
	AddressBook.search=search;

}());