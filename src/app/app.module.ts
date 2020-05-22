import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LandingComponent } from "./components/landing/landing.component";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { SearchComponent } from './search/search.component';
import { ModifyComponent } from './modify/modify.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, AddFormComponent, SearchComponent, ModifyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
