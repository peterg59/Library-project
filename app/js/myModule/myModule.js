angular.module('myModule',['ngRoute']).config(function($routeProvider) {
    $routeProvider
    .when('/library', {
    	templateUrl : './library.html',
    	controller : 'libraryController'
    }).when('/library/add',{
    	templateUrl : './addBook.html',
    	controller : 'addBookController'
    }).when('/library/edit/:id',{
    	templateUrl : './editBook.html',
    	controller : 'editBookController'
    }).when('/library/remove/:id',{
    	templateUrl : './removeBook.html',
    	controller : 'removeBookController'
    }).when('/library/:id',{
    	templateUrl : './book.html',
    	controller : 'bookController'
    })
    .otherwise({
        redirectTo : "/library"
     });
});