//(function(){
//    
//   
//})();

 bookfarmApp.controller('categoriesListController',categoriesCtrl);
     categoriesCtrl.$inject = ["$scope"];
    
    function categoriesCtrl($scope){
        const categories = ['Fiction','Architecture','Arts&Photography','Body,Mind and Spirit','Business Economics'];
    
    
    $scope.categories = categories;
    };