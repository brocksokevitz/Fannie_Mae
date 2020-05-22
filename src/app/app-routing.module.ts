import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { LandingComponent } from "./components/landing/landing.component";

const routes: Routes = [
  { path: "add", component: AddFormComponent },
  { path: "landing", component: LandingComponent },

  { path: "", redirectTo: "/landing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
