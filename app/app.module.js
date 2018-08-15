(function(angular) {
    'use strict';
    angular.module('app', ['ngRoute', 'homeModule', 'aboutModule', 'newsModule', 'infoModule', 'navModule', 'servicesModule', 'filtersModule', 'orderModule'])
        .controller('MainCtrl', function mainCtrl($scope, facebookService) {
            $scope.$on('fb-login', function(e, login) {
                facebookService.handleLogin(login);
            });
            this.info = {
                hours: 5
            };
        })
        .run(['$rootScope', '$window', function($rootScope, $window) {
            $window.fbAsyncInit = function() {
                FB.init({
                    appId: '890140994494480',
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.11'
                });

                FB.getLoginStatus(function(response) {
                    $rootScope.$broadcast('fb-login', response);
                });
                FB.AppEvents.logPageView();

            };

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }]);
})(window.angular);
