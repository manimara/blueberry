var BlueBerryApp = angular.module('BlueBerryApp', ['ngRoute', 'ngResource'])
.config([$routeProvider], function($routeProvider){
    $routeProvider
        .when('/app', {
                'templateUrl' : '/app/index.html'
        })
        .otherwise(redirectTo : '/app/index.html')
});

