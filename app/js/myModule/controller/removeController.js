angular.module('myModule').controller('removeBookController', function($scope, $routeParams, LibraryService){
	
	$scope.book = undefined;
	var id = $routeParams.id;
	
	LibraryService.getOne(id).then(function(data){
		$scope.book = data;
	});

	$scope.remove = function(){
		LibraryService.removeOne($scope.book).then(function(data){
			$scope.book = data;
		});
	};
	
});