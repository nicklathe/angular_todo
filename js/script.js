var todoApp = angular.module('TodoApp', ['ngAnimate']);

todoApp.run(function(){
    console.log('App running!');
});

todoApp.controller('TodoList', ['$scope', function($scope){
    $scope.items = [];
    $scope.items.push({done: false, name: 'fight a bear'})
    $scope.items.push({done: false, name: 'skin a cat alive'})
    $scope.items.push({done: false, name: 'make a cake'})
    $scope.newItem = "";

    $scope.removeItem = function(idx){
        $scope.items.splice(idx, 1);
    };

    $scope.getData = function(){
        console.log($scope.items);
    };

    $scope.addItem = function(){
        $scope.items.push({done: false, name: $scope.newItem});
        $scope.newItem = "";
    };

    $scope.move = function(idx, dir){
        var targetIndex = idx + dir;

        if(targetIndex < 0 || targetIndex >= $scope.items.length){
            alert('Invalid Move');
            return;
        };
        var tempItem = $scope.items[idx];
        $scope.items[idx] = $scope.items[targetIndex];
        $scope.items[targetIndex] = tempItem;
    };



}]);