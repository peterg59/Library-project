angular.module('myModule').service("LibraryService", [ '$http', 'ServiceId', function($http, ServiceId){
	
	var p = $http.get('http://192.168.1.14:8090/resource/media.recherche')
	
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
			ps[id] = $http.get('http://192.168.1.14:8090/resource/media.accession?id='+id);
		}
		var p2 = ps[id].then(function(response){
			return response.data;
		});
		return p2;
	};
	
	this.putOne = function(data){
		var promiseAdd = $http.post('http://192.168.1.14:8090/resource/media.creation', data)
		return promiseAdd.then(function(response){
			return response.data;
		}, function(){
			return {};
		})
	}
	
	this.editOne = function(data){
		var promiseEdit = $http.post('http://192.168.1.14:8090/resource/media.modification', data)
		return promiseEdit.then(function(response){
			return response.data;
		}, function(){
			return {};
		})
	}
}]);
