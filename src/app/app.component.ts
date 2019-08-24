import { Component } from "@angular/core";
import { GoogleService, GmapsStyle } from "./google.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    style: GmapsStyle[];
    title: string;
    constructor(private googleService: GoogleService) {
        this.style = this.googleService.getStyle();
        this.title = JSON.stringify(this.style);
    }
}
