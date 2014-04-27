var CommonUtils={};

(function(){

	CommonUtils.getFormData=function(formId){
		var data={};
		var fields=$(formId+' :input');

		fields.each(function(){
			data[this.id]=this.value;
		});

		return data;
	};

}());