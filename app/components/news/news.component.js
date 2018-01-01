angular.module('newsModule').component('newsView', {
    templateUrl: 'components/news/news.html',
    controller: ['facebookService', function(facebookService) {
        this.hello = "hello from news controller";
        this.posts = [];

        this.getLastName = () => {
            console.log("get last name");
            facebookService.getMyLastName()
                .then(data => {
                    this.hello = data.last_name;
                });
        };

        this.getFeed = () => {
            console.log("try get feeds");
            facebookService.getPosts("ritzherrefrisor")
                .then(data => {
                    this.posts = data.data;
                }, error => {
                    console.log(error);
                });
        };
        facebookService.on('connect', this.getFeed);
        this.getFeed();
    }]
});