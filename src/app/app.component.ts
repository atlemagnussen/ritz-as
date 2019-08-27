import { Component } from "@angular/core";
import {} from "googlemaps";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {

    title: string;
    pos: google.maps.LatLng;
    constructor() {
        this.title = "hello";
    }

    ngOnInit(): void {

        this.pos = new google.maps.LatLng(62.342218, 5.633821);
    }
}
