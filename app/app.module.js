(function(angular) {
    'use strict';
    angular.module('app', ['ngRoute', 'homeModule', 'aboutModule', 'infoModule', 'navModule', 'servicesModule'])
        .controller('MainCtrl', function mainCtrl($window) {
            this.info = {
                hours: 5
            };
            $window.fbAsyncInit = function() {
                FB.init({
                    appId: '890140994494480',
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.11'
                });

                FB.getLoginStatus(function(response) {
                    statusChangeCallback(response);
                });
                FB.AppEvents.logPageView();

            };

            function statusChangeCallback(response) {
                if (response.status === 'connected') {
                    console.log('logged in and authenticated');
                } else {
                    console.log('not logged in');
                }
            }
        });
})(window.angular);