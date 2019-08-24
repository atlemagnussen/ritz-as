import { Component } from "@angular/core";
import { GoogleService } from "./google.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title: string;
    constructor(private googleService: GoogleService) {
        this.title = this.googleService.getHello();
    }
}
