angular.module('myModule').service("LibraryService", [ '$http', 'ServiceId', function($http, ServiceId){
	
	var p = $http.get('http://192.168.1.16:8090/resource/media.recherche')
	
	this.getAll = function(){
		
		var p2 = p.then(function(response){
			 var liste = response.data;
			 return liste;
		});
		return p2;
	};
	var ps = {};
	this.getOne = function(id){
		if(!ps[id]){
			ps[id] = $http.get('http://192.168.1.16:8090/resource/media.accession?id='+id);
		}
		var p2 = ps[id].then(function(response){
			return response.data;
		});
		return p2;
	};
		
}]);
