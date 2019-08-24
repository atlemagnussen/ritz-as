angular.module("homeModule").component("homeView", { 
    templateUrl: "components/home/home.html",
    controller: ["googleService", function(googleService) {
        this.hello = "hello from home controller";


        var loc = {
            lat: 62.342218,
            lng: 5.633821
        };

        this.map = new google.maps.Map(
            document.getElementById("map"), {
                zoom: 15,
                center: loc,
                styles: googleService.styleDark,
                zoomControl: false,
                mapTypeControl: false,
                caleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
                mapTypeId: "terrain"
            });

        this.marker = new google.maps.Marker({
            position: loc,
            map: this.map,
        });


    }]
});
