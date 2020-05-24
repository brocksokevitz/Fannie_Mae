import { Component, OnInit } from "@angular/core";
import { AppEntry } from "src/app/models/app-entry";
import { AppService } from "src/app/services/app.service.service";

@Component({
  selector: "app-add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.css"],
})
export class AddFormComponent implements OnInit {
  percNewScore: any = 0;
  complexityScore: any = 0;
  impactScore: any = 0;
  businessCritScore: any = 0;
  historyScore: any = 0;
  releaseFreqScore: any = 0;
  devInHouseScore: any = 0;
  sharedCompScore: any = 0;
  volumeScore: any = 0;
  provenScaleScore: any = 0;
  totalScore: any = 0;

  newEntry = new AppEntry("", "", "", "", "", "", "", "", "", "", "", "");

  totalEntry = new AppEntry("", "", "", "", "", "", "", "", "", "", "", "");
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

    // this._appService.appEntry(this.newEntry).subscribe(
    //When a request is successful the data will be returned in the data object.
    //(data) => {
    // console.log("Success", data);
    // },
    //Incase of error from request, error info is return through error object.
    // (error) => {
    // console.log("Error", error);
    //}
    //);
    //console.log("Entry with total");
    //console.log(this._appService.appEntryMock(this.newEntry));
    this.totalEntry = this._appService.appEntryMock(this.newEntry);
    //console.log("TotalEntry");
    //console.log(this.totalEntry);
    this.percNewScore = this.totalEntry.percentnew;
    this.complexityScore = this.totalEntry.complexity;
    this.businessCritScore = this.totalEntry.businesscriticality;
    this.historyScore = this.totalEntry.history;
    this.releaseFreqScore = this.totalEntry.releasefrequency;
    this.impactScore = this.totalEntry.impact;
    this.sharedCompScore = this.totalEntry.sharedcomponent;
    this.volumeScore = this.totalEntry.volume;
    this.devInHouseScore = this.totalEntry.developedinhouse;
    this.provenScaleScore = this.totalEntry.provenscale;

    this.totalScore = this.totalEntry.total;
  }
}
