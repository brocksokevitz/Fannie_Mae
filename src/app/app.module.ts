import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LandingComponent } from "./components/landing/landing.component";
import { AddFormComponent } from "./components/add-form/add-form.component";
<<<<<<< HEAD
import { SearchComponent } from "./components/search/search.component";
import { ModifyComponent } from "./components/modify/modify.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AddFormComponent,
    SearchComponent,
    ModifyComponent,
  ],
=======
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, AddFormComponent, SearchComponent],
>>>>>>> e024402f0c36edba972cfa0ef70fb9ba521d7f91
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
