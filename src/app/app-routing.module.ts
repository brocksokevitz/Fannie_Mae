import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { LandingComponent } from "./components/landing/landing.component";
import { SearchComponent } from "./components/search/search.component";
import { AllInOneComponent } from "./components/all-in-one/all-in-one.component";


const routes: Routes = [
  { path: "add", component: AddFormComponent },
  { path: "landing", component: LandingComponent },
  { path: "search", component: SearchComponent },
  { path: "allinone", component: AllInOneComponent },

  { path: "", redirectTo: "/allinone", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
