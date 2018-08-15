angular.module('orderModule').component('orderView', {
    templateUrl: 'components/order/order.html',
    bindings: {
        info: '='
    },
    controller: function() {
        this.hello = "helllo";
    }
});
