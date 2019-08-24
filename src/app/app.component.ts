import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import {} from "googlemaps";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    @ViewChild("map", {static: true}) mapElement: any;
    map: google.maps.Map;
    title: string;
    constructor() {
        this.title = "hello";
    }
    ngOnInit(): void {
        const mapProperties = {
            center: new google.maps.LatLng(35.2271, -80.8431),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(
            this.mapElement.nativeElement,
            mapProperties
        );
    }
}
