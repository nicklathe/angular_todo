angular.module('like-button',[])
.directive('likeButton', function(){
    console.log("hey!")
    return {
        restrict: 'E',
        scope: {
            startingValue: '=?'
        },
        controller: ['$scope', function($scope){
            $scope.value = $scope.startingValue ? $scope.startingValue : 0;
            $scope.increaseCount = function(){
            $scope.value += 1
            }
        }],

        replace: true,
        template: '<button ng-click="increaseCount()" class="btn btn-primary">Likes: {{value}}</button>'
    }
});