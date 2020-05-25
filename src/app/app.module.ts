import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LandingComponent } from "./components/landing/landing.component";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { SearchComponent } from "./components/search/search.component";
import { AllInOneComponent } from './components/all-in-one/all-in-one.component';
import { AppService } from './services/app.service.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AddFormComponent,
    SearchComponent,
    AllInOneComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
