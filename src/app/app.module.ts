import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { environment } from "environments/environment";

import { UserServiceService } from './user-service.service';
import { UserlevelService } from './userlevel.service';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [ {
        provide: 'API_URL', useValue: environment.apiUrl},
        UserServiceService,
        UserlevelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
