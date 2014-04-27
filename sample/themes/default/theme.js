//var cache=false;

var caramelViewEngine=require('caramel-view-engine').engine;

var engine=caramel.engine('caramelViewEngine',caramelViewEngine);

var resolve=function(path){
	return this.__proto__.resolve.call(this,path);
};