import { Component, ViewChild, ElementRef } from "@angular/core";
import {} from "googlemaps";
import { GoogleService } from "./google.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {

    @ViewChild("map", { static: true }) mapElement: ElementRef;
    map: google.maps.Map;
    pointer: google.maps.Marker;
    title: string;
    constructor(private googleService: GoogleService) {
        this.title = "hello";
    }

    ngOnInit(): void {

        const pos = new google.maps.LatLng(62.342218, 5.633821);

        const mapProperties = {
            center: pos,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            caleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
            styles: this.googleService.getStyle(),
            backgroundColor: "hsla(0, 0%, 0%, 0)",
        };
        this.map = new google.maps.Map(
            this.mapElement.nativeElement,
            mapProperties
        );
        this.pointer = new google.maps.Marker({
            position: pos,
            map: this.map,
        });
    }
}
