import { Component, OnInit } from "@angular/core";

@Component({
    selector: "facebook-logo",
    templateUrl: "./facebook-logo.component.html",
    styleUrls: ["./facebook-logo.component.css"]
})
export class FacebookLogoComponent implements OnInit {

    // constructor() { 
    // }

    ngOnInit(): void {
        console.log("init facebook logo");
    }

}
