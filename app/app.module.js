(function(angular) {
    'use strict';
    angular.module('app', ['ngRoute', 'homeModule', 'aboutModule', 'infoModule', 'navModule'])
    .controller('MainCtrl', function mainCtrl() {
        this.info = {
            hours: 5
        };
    });
})(window.angular);
