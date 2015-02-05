angular.module('weather',[])
.directive('weather', function(){
    // console.log("weather!!!")
    return {
        restrict: 'E',
        scope: {
            location: '@'
        },
        controller: ['$scope','$http','$element', function($scope, $http, $element){

            // $scope.weather = {};

            // $scope.getWeather = function(){

                var req = {
                    url: 'http://api.openweathermap.org/data/2.5/weather',
                    params: {
                        q: $scope.location
                    }
                };

                $http(req).success(function(data){
                    $scope.weather = data;
                    $scope.temp = Math.floor(((data.main.temp - 273.15) * 1.8000) + 32);
                });
            // }
        }],
        replace: true,
        template: '<div><h4>{{weather.name}}</h4><h5>{{weather.weather[0].description}}, {{temp}}&deg;F</h5></div>'
    }
});