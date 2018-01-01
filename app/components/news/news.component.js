angular.module('newsModule').component('newsView', {
    templateUrl: 'components/news/news.html',
    controller: ['facebookService', function(facebookService) {
        this.hello = "hello from news controller";
        this.getLastName = function() {
            console.log("get last name");
            facebookService.getMyLastName()
                .then(data => {
                    this.hello = data.last_name;
                });
        };
    }]
});
