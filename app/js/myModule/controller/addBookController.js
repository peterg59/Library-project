angular.module('myModule').controller('addBookController', function($scope, LibraryService){
	
	$scope.book = undefined;
	
	$scope.add = function(){
		LibraryService.putOne($scope.book).then(function(data){
			$scope.book = data;
		});
	};
	
});