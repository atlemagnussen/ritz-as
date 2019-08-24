angular.module("aboutModule").component("aboutView", {
    templateUrl: "components/about/about.html",
    controller: ["$routeParams", function AboutViewController() {
        this.hello = "Hello ritz";
        this.url = "http://ritz.as";
    }
    ]
});
