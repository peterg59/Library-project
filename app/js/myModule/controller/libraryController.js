angular.module('myModule').controller('libraryController', function($scope, LibraryService){
		
		$scope.list = [];
		/*$scope.recherche = SearchService.get('espace-recherche');
		$scope.search = SearchService.get('espace-search');*/
		LibraryService.getAll().then(function(list){
			$scope.list = list;
		});
});