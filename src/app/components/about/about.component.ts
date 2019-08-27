import { Component, OnInit } from "@angular/core";
import {} from "googlemaps";

@Component({
    selector: "about-page",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {

    // constructor() { 
    // }

    ngOnInit(): void {
        console.log("init about");
    }

}
