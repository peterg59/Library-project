angular.module('myModule',['ngRoute']).config(function($routeProvider) {
    $routeProvider
    .when('/library', {
    	templateUrl : '../../library.html',
    	controller : 'libraryController'
    }).when('/library/:id',{
    	templateUrl : '../../book.html',
    	controller : 'bookController'
    })
    .otherwise({
        redirectTo : "/library"
     });
});