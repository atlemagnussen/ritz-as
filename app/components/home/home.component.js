angular.module('homeModule').component('homeView', {
    templateUrl: 'components/home/home.html',
    controller: ['googleService', function(googleService) {
        this.hello = "hello from home controller";


        var loc = {
            lat: 62.342409,
            lng: 5.633525
        };

        this.map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 14,
                center: loc,
                styles: googleService.styleDark
            });

        this.marker = new google.maps.Marker({
            position: loc,
            map: this.map,
        });


    }]
});
