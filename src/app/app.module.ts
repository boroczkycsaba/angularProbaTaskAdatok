import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DataStoreServiceService} from "./data-store-service.service";
import {UserManageService} from "./user-manage.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataStoreServiceService, UserManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
