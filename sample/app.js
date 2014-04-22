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
pipe.plug(function(err,req,res,session,handlers){
	var log=new Log();
	log.info(err);
});
//pipe.plug(common.errHandler);

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
router.app.utils('get-renderer',function(viewId,data){
	//var log=new Log();
	caramel=require('caramel');
	data.__viewId=viewId;
	//log.info('Calling caramel render');
	caramel.render(data);
});

application.serve(function(req,res,session){
	pipe.resolve(req,res,session);
});