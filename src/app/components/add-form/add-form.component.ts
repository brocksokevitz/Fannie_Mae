import { Component, OnInit } from "@angular/core";
import { AppEntry } from "src/app/models/app-entry";
import { AppService } from "src/app/services/app.service.service";

@Component({
  selector: "app-add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.css"],
})
export class AddFormComponent implements OnInit {
  newEntry = new AppEntry("", "", "", "", "", "", "", "", "", "", "");
  constructor(private _appService: AppService) {}

  ngOnInit() {}

  onSubmit() {
    //Just to verify that the data is being recieved from the form. Delete later.
    console.log(
      "Start onSubmit() : newEntry: " +
        this.newEntry.appname +
        " %New: " +
        this.newEntry.percentnew +
        " Complexity: " +
        this.newEntry.complexity +
        " Impact: " +
        this.newEntry.impact +
        " Business Criticality: " +
        this.newEntry.businesscriticality +
        " History " +
        this.newEntry.history +
        " release Frequency: " +
        this.newEntry.releasefrequency +
        " Developed Inhouse: " +
        this.newEntry.developedinhouse +
        " Shared Component: " +
        this.newEntry.sharedcomponent +
        " Volume: " +
        this.newEntry.volume +
        " Proven Scale: " +
        this.newEntry.provenscale
    );

    this._appService.appEntry(this.newEntry).subscribe(
      //When a request is successful the data will be returned in the data object.
      (data) => {
        console.log("Success", data);
      },
      //Incase of error from request, error info is return through error object.
      (error) => {
        console.log("Error", error);
      }
    );
  }
}
