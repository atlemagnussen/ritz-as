angular.module('infoModule').component('infoView', {
    templateUrl: 'components/info/info.html',
    bindings: {
        info: '='
    },
    controller: function() {
        this.getLastName = function() {
                // console.log(login);
                // facebookService.getMyLastName()
                // .then(function(lastName) {
                //     this.hello = lastName.last_name;
                // });
        };

        this.hello = "helllo";
    }
});
