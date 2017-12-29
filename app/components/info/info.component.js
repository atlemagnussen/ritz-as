angular.module('infoModule').component('infoView', {
    templateUrl: 'components/info/info.html',
    bindings: {
        info: '='
    },
    controller: function(facebookService) {
        var what = facebookService.getMyLastName();
        this.hello = "helllo";
    }
});
