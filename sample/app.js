/**
 * Description: This is the entry point for your application.
 * Any logic that needs to be executed for a given lifecycle of an app should be placed within
 * this file before the application.serve method
 */

var pipe=require('pipe');
var common=require('pipe-common');
var router=require('router');

pipe.plug('/themes/default/public/',common.staticContent({dir:'/themes/default/public/'}));
pipe.plug(common.queryParser());
pipe.plug(common.bodyParser);
pipe.plug(router);
pipe.plug(common.errHandler);

//Register the routes of the application
require('/apis/contact.js');
require('/apis/contacts.js');
require('/controllers/contact.js');
require('/controllers/contacts.js');


//Setting up caramel
var caramel=require('caramel');

caramel.configs({
	context:'/sample',
	cache:false,
	negotiation:true,
	themer:function(){
		return 'default'
	}
});

//Set up caramel as the default renderer for
//GET requests in the router
router.app.utils('get-renderer',function(viewId,data,res){

	caramel=require('caramel');
	//Print only a json response if there is no viewId
	if((viewId=='')||(!viewId)){ 
		res.addHeader('Content-Type','application/json');
		print(data);
		return;
	}
	data.__viewId=viewId;
	caramel.render(data);

});

application.serve(function(req,res,session){
	pipe.resolve(req,res,session);
});