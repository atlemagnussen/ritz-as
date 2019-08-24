import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import {} from "googlemaps";
import { GoogleService } from './google.service';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {

    @ViewChild("map", { static: true }) mapElement: any;
    map: google.maps.Map;
    title: string;
    constructor(private googleService: GoogleService) {
        this.title = "hello";
    }

    ngOnInit(): void {
        const mapProperties = {
            center: new google.maps.LatLng(62.342218, 5.633821),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            caleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
            styles: this.googleService.getStyle()
        };
        this.map = new google.maps.Map(
            this.mapElement.nativeElement,
            mapProperties
        );
    }
}
