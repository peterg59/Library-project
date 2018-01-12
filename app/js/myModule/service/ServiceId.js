angular.module('myModule').service("ServiceId", function(){
    this.calculateId = function(book){
    	var url = book.url;
		url = url.substring(0, url.length-1)
		var id = url.substring(url.lastIndexOf('/')+1);
		id = parseInt(id);
		return id;
    };
    this.calculateUrlId = function(url){
		url = url.substring(0, url.length-1)
		var id = url.substring(url.lastIndexOf('/')+1);
		id = parseInt(id);
		return id;
    };
});