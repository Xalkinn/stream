angular.module('module').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/acceuil',{
            templateUrl : './templates/acceuil.html',
            controller : 'menuController'
        })
        .when('/streamer',{
            templateUrl : './templates/streamer.html',
            controller : 'streamerController'
        })
        .when('/xalkinn',{
            templateUrl : './templates/xalkinn.html',
            controller : 'streamerController'
        })
        .when('/isoka',{
            templateUrl : './templates/isoka.html',
            controller : 'streamerController'
        });

    $routeProvider.otherwise({
        redirectTo: '/acceuil'
    });
}]);