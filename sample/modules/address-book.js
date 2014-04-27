/**
 *Description: This module manages models a simple address book with
 *			   a set of CRUD operations.
 */
var AddressBook = {};
(function() {
    var ADDRESS_STORE = 'address.store';
    var log=new Log();
    /**
     * The function adds a single contact to the address book
     * @options: A JSON object describing a single contact
     * @return: If the contact is added successfully a JSON representation
     * is provided,else null
     */
    var addContact = function(options) {
    	var contacts=db();
    	var contact={};
    	var uuid=require('uuid');
    	contact.id=uuid.generate();
    	contact.fName=options.fName;
    	contact.lName=options.lName;
    	contact.telephone=options.telephone;
    	contact.email=options.email;
    	contacts.push(contact);
    	return true;
    };
    /**
     * The function will remove the contact described by the provided options
     * object
     * @param  A JSON object describing the contact to be removed
     * @return True if the contact is removed,else false
     */
    var removeContact = function(options) {
    	var contact=options;
    	var contacts=db();
    	if(!contact){
    		return false;
    	}
    	return true;
    };
    /**
     * The function updates the details of the contact described in the provided
     * options object
     * @param  A JSON object describing a contact
     * @return True if the contact is added successfully,else false
     */
    var editContact = function(options) {
    	var contact=options;
    	var contacts=db();

    	var savedContact=search(contact);
    	//Check if the provided contact exists in the db
    	if(!savedContact){
    		return false;
    	}

    	//Update the contact details
    	for(var key in contact){

    		savedContact[key]=contact[key];
    	}
    	return true;
    };
    /**
     * The function searches for a contact based on the criteria provided in the options
     * object
     * @param  A JSON object containing the criteria for the search
     * @return An array of contacts
     */
    var search = function(options) {
    	//Retrieve all of the data for the sake of the demo
    	var contacts=db();
    	//Check if search options have been provided with an id
    	if((options)&&(options.id)){
    		contacts=findContact(options.id, contacts);
    	}
        return contacts;
    };

    /**
     * The function  mimics a database used to 
     * @return {[type]} [description]
     */
    var db=function(){
    	var addresses=session.get(ADDRESS_STORE);

    	if(!addresses){
    		var addresses=[];
    		populateFakeData(addresses);
    		session.put(ADDRESS_STORE,addresses);
    	}		

    	return addresses;
    };

    var populateFakeData=function(list){
    	list.push({
    		id:'3cdbeac3-b279-4b4e-b5d3-481928879c33',
    		fName:'John',
    		lName:'Doe',
    		address:'Fake Address 1',
    		telephone:'000-000-000',
    		email:'johnd@wso2.com'
    	});

    	list.push({
    		id:'c8269eb7-b2d8-410f-aeab-ffaac27dfab6',
    		fName:'Jane',
    		lName:'Doe',
    		address:'Fake Address 2',
    		telephone:'111-222-333',
    		email:'janed@wso2.com'
    	});
    };

    var findContact=function(id,data){

    	for(var index in data){
    		if(data[index].id===id){
    			return data[index];	
    		}
    	}

    	return null;
    };

    var deleteContact=function(id,data){

    	for(var index in data){
    		if(data[index].id===id){
    			return true;	
    		}
    	}

    	return false;
    };

    AddressBook.addContact = addContact;
    AddressBook.removeContact = removeContact;
    AddressBook.editContact = editContact;
    AddressBook.search = search;
}());