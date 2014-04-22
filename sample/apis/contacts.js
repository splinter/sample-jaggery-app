var router=require('router');
var addressBook=require('/modules/address-book.js').AddressBook;

router.app.get('/api/contacts',function(req,res){
	var contacts=addressBook.search();
	res.render(contacts);
});