import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LandingComponent } from "./components/landing/landing.component";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { SearchComponent } from "./components/search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AddFormComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
