angular.module('infoModule').component('infoView', {
    templateUrl: 'components/info/info.html',
    bindings: {
        info: '='
    },
    controller: function() {
        this.hello = "helllo";
    }
});
