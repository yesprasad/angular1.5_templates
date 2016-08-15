'use strict';
var bookfarmApp = angular.module('bookfarmApp',['ngRoute'])
.config(function($routeProvider){
   $routeProvider.when('/newBook',
                      {
                        templateUrl:'templates/AddNewBook.html',
                        controller:'AppControllers/getCategories'
                    });
});

