(function(angular) {
    "use strict";
    angular.module("app", ["ngRoute", "homeModule", "aboutModule", "newsModule", "infoModule", "navModule", "servicesModule", "filtersModule", "orderModule"])
        .controller("MainCtrl", function mainCtrl() {
            this.info = {
                hours: 5
            };
        })
        .run(["$rootScope", "$window", function() {
        }]);
})(window.angular);
