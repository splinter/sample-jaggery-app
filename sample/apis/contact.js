/**
 * Description: The script registers the API callbacks that perform
 * 				the CRUD operations for a Contact resource
 */

var router=require('router');
var addressBook=require('/modules/address-book.js').AddressBook;

router.app.get('/api/contact/:id',function(req,res){
	var id=req.params.id;
	var contact=addressBook.search({id:id})||{};
	var result={};
	result.code='200';
	result.data=contact;
	if(!contact){
		result.code='500';
		result.message='Contact was not found';
	}	
	//res.addHeader('Status',res.code);
	//res.render(result);
});

router.app.post('/api/contact',function(req,res){
	res.render('Done!');
});

router.app.put('/api/contact/:id',function(req,res){
	var options=req.body;
	var success=addressBook.editContact(options);
	var result={};
	result.msg='Contact added successfully';
	result.code='200';

	if(!success){
		result.code='500';
		result.msg='Contact was not added successfully';
	}

	res.addHeader('Status',result.code);
	res.render(result);
});

router.app.delete('/api/contact/:id',function(req,res){

});