/**
 * Description: The script registers the pages used to manipulate a contact
 */

var router=require('router');
var addressBook=require('/modules/address-book.js').AddressBook;

router.app.get('/contact/:id',function(req,res){
	var id=req.params.id||'none';
	var contact=addressBook.search({id:id})||{};
	res.render('view-contact',contact);
});

router.app.get('/contact/edit/:id',function(req,res){
	var id=req.params.id||'none';
	var contact=addressBook.search({id:id})||{};
	res.render('edit-contact',contact);
});

router.app.get('/contact/delete/:id',function(req,res){
	var id=req.params.id||'none';
	var contact=addressBook.search({id:id})||{};
	res.render('delete-contact',contact);
});

router.app.get('/contact/add/',function(req,res){
	res.render('add-contact',{});
});