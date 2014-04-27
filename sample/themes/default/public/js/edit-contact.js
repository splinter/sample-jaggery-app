/**
 * Description: A simple script which submits the contents of the edit contact form
 * If the contact is successfully updated then the contacts page is loaded
 * If not an error message is presented to the user.
 */
$(function(){

	var BTN_EDIT_CONTACT='#btn-edit-contact';
	var FORM_EDIT_CONTACT='#form-edit-contact';
	var API_EDIT_CONTACT='/sample/api/contact';
	var CONTACTS_PAGE='/sample/contacts';
	var resolveAPI=function(data){
		return API_EDIT_CONTACT+'/'+data.id;
	}
	$(BTN_EDIT_CONTACT).on('click',function(e){

		var data=CommonUtils.getFormData(FORM_EDIT_CONTACT);
		var id=data.id;

		var promise=$.ajax({
			url:resolveAPI(data),
			type:'PUT',
			data:data
		});

		promise.success(function(){
			alert('Contact has been successfully updated');
			window.location=CONTACTS_PAGE;
		});

		promise.error(function(){
			alert('Unable to update the contact');
		});
	})
	
});