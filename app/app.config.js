(function(angular) {
    "use strict";
    angular.module("app").
        config(["$locationProvider", "$routeProvider", function config($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix("!");

            $routeProvider.
                when("/", {
                    template: "<home-view></home-view>"
                }).
                when("/about", {
                    template: "<about-view></about-view>"
                }).
                when("/news", {
                    template: "<news-view></news-view>"
                }).
                when("/order", {
                    template: "<order-view></order-view>"
                }).
                otherwise("/");
        }
        ]);
})(window.angular);
