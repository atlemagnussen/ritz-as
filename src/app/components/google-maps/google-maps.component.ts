import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import {} from "googlemaps";
import { GoogleService } from "../../services/google.service";

@Component({
    selector: "app-google-maps",
    templateUrl: "./google-maps.component.html",
    styleUrls: ["./google-maps.component.css"]
})
export class GoogleMapsComponent implements OnInit {

    @ViewChild("map", { static: true }) mapElement: ElementRef;
    map: google.maps.Map;
    pointer: google.maps.Marker;
    
    posString: string;
    // @Input() latitude: number;
    // @Input() longitude: number;
    @Input() pos: google.maps.LatLng;
    constructor(private googleService: GoogleService) { 

    }

    ngOnInit(): void {

        // const pos = new google.maps.LatLng(62.342218, 5.633821);
        // const pos = new google.maps.LatLng(this.latitude, this.longitude);
        this.posString = this.pos.toString();

        const mapProperties = {
            center: this.pos,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            caleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            zoomControl: false,
            styles: this.googleService.getStyle(),
            backgroundColor: "hsla(0, 0%, 0%, 0)",
        };
        this.map = new google.maps.Map(
            this.mapElement.nativeElement,
            mapProperties
        );
        this.pointer = new google.maps.Marker({
            position: this.pos,
            map: this.map,
        });
    }

}
