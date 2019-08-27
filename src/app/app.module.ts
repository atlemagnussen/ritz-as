import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GoogleMapsComponent } from "./components/google-maps/google-maps.component";
import { MyCounterComponent } from "./components/my-counter/my-counter.component";
import { FacebookLogoComponent} from "./components/social/facebook-logo.component";
import { InstagramLogoComponent} from "./components/social/instagram-logo.component";

import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";

@NgModule({
    declarations: [
        AppComponent,
        GoogleMapsComponent,
        MyCounterComponent,
        FacebookLogoComponent,
        InstagramLogoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ count: counterReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
