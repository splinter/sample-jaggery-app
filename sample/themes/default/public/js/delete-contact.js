/**
 * Description: A simple script which submits the contents of the delete contact form
 * If the contact is successfully deleted then the contacts page is loaded
 * If not an error message is presented to the user.
 */
$(function(){

	var BTN_DELETE_CONTACT='#btn-delete-contact';
	var FORM_DELETE_CONTACT='#form-delete-contact';
	var API_DELETE_CONTACT='/sample/api/contact';
	var CONTACTS_PAGE='/sample/contacts';
	var resolveAPI=function(data){
		return API_DELETE_CONTACT+'/'+data.id;
	};
	$(BTN_DELETE_CONTACT).on('click',function(e){

		var data=CommonUtils.getFormData(FORM_DELETE_CONTACT);
		var id=data.id;
		
		var promise=$.ajax({
			type:'DELETE',
			data:data,
			url:resolveAPI(data)
		});

		promise.success(function(){
			alert('Contact has been successfully deleted');
			window.location=CONTACTS_PAGE;
		});

		promise.error(function(){
			alert('Unable to delete the contact');
		});
	})
	
});