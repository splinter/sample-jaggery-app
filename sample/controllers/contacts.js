var router=require('router');

router.app.get('/contacts',function(req,res){
	res.render('view-contacts',{});
});