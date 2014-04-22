/**
 * Description: This is the entry point for your application.
 * Any logic that needs to be executed for a given lifecycle of an app should be placed within
 * this file before the application.serve method
 */

var pipe=require('pipe');
var router=require('router');

pipe.plug(router);


application.serve(function(req,res,session){
	pipe.resolve(req,res,session);
});