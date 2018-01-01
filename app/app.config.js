(function(angular) {
    'use strict';
    angular.module('app').
    config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/home', {
            template: '<home-view></home-view>'
        }).
        when('/about', {
            template: '<about-view></about-view>'
        }).
        when('/news', {
            template: '<news-view></news-view>'
        }).
        otherwise('/home');
        }
    ]);
})(window.angular);
