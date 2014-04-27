/**
 * Description: A simple script which submits the contents of the add contact form
 * If the contact is successfully added then the contacts page is loaded
 * If not an error message is presented to the user.
 */
$(function(){

	var BTN_ADD_CONTACT='#btn-add-contact';
	var FORM_ADD_CONTACT='#form-add-contact';
	var API_ADD_CONTACT='/sample/api/contact';
	var CONTACTS_PAGE='/sample/contacts';

	$(BTN_ADD_CONTACT).on('click',function(e){

		var data=CommonUtils.getFormData(FORM_ADD_CONTACT);

		var promise=$.post(API_ADD_CONTACT,data);

		promise.success(function(){
			alert('Contact has been successfully added');
			window.location=CONTACTS_PAGE;
		});

		promise.error(function(){
			alert('Unable to add the contact');
		});
	})
	
});