angular.module('myModule').controller('bookController', function($scope, $routeParams, LibraryService){
	$scope.book = undefined;
	var id = $routeParams.id;
	
	LibraryService.getOne(id).then(function(data){
		$scope.book = data;
	});
});