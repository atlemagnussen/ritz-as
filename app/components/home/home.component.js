angular.module('homeModule').component('homeView', {
    templateUrl: 'components/home/home.html',
    controller: ['$routeParams', function() {
        this.hello = "hello from home controller";
    }]
});
