angular.module('myModule').controller('editBookController', function($scope, $routeParams, LibraryService){
	
	$scope.book = undefined;
	var id = $routeParams.id;
	
	LibraryService.getOne(id).then(function(data){
		$scope.book = data;
	});

	$scope.edit = function(){
		LibraryService.editOne($scope.book).then(function(data){
			$scope.book = data;
		});
	};
	
});