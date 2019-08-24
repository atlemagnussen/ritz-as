import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class GoogleService {
    private helloText: string;

    constructor() {
        this.helloText = "hello world";
    }

    getHello(): string {
        return this.helloText;
    }
}
