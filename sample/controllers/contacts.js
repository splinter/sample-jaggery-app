var router=require('router');
var addressBook=require('/modules/address-book.js').AddressBook;

router.app.get('/contacts',function(req,res){
	var contacts=addressBook.search();
	res.render('view-contacts',{contacts:contacts});
});