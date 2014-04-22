/**
 * Description: The script registers the pages used to manipulate a contact
 */

var router=require('router');

router.app.get('/contact/:id',function(req,res){
	res.render('view-contact',{});
});

router.app.get('/contact/edit/:id',function(req,res){
	res.render('edit-contact',{});
});

router.app.get('/contact/delete/:id',function(req,res){
	res.render('delete-contact',{});
});

router.app.get('/contact/add/',function(req,res){
	res.render('add-contact',{});
});