import { Component, OnInit } from "@angular/core";
import { AppEntry } from "src/app/models/app-entry";
import { SearchEntry } from "src/app/models/search-entry";
import { AppService } from "src/app/services/app.service.service";
import { load } from '@angular/core/src/render3';

@Component({
  selector: "app-all-in-one",
  templateUrl: "./all-in-one.component.html",
  styleUrls: ["./all-in-one.component.css"],
  providers: [AppService]
})
export class AllInOneComponent implements OnInit {
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

  //Results
  resultOne: string = "Result One";
  resultTwo: string = "Result Two";
  resultThree: string = "Result Three";

  apps = [];

  newSearch = new SearchEntry("");

  returnEntry = new AppEntry("", "", "", "", "", "", "", "", "", "", "", "");

  newEntry = new AppEntry("", "", "", "", "", "", "", "", "", "", "", "");

  totalEntry = new AppEntry("", "", "", "", "", "", "", "", "", "", "", "");

  constructor(private _appService: AppService) {}

  ngOnInit() {
    this.apps = this._appService.getAppsArray();
    console.log(this.apps);
    this.resultOne = this.apps[0].appname;
    this.resultTwo = this.apps[1].appname;
    this.resultThree = this.apps[2].appname;
  }

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

    

    this._appService.add(this.totalEntry);

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

  onSearchSubmit() {
    //Just to verify that the data is being recieved from the form. Delete later.
    //console.log("Start onSubmit() : newSearch: " + this.newSearch.appname);

    console.log(this.newSearch.appname);

    // this.returnEntry = this._appService.searchEntry(this.newSearch);

    // //Check for valid return value

    // if (this.returnEntry.appname == "") {
    //   console.log("Nothing Found");
    // } else {
    //   this.percNewScore = this.returnEntry.percentnew;
    //   this.complexityScore = this.returnEntry.complexity;
    //   this.businessCritScore = this.returnEntry.businesscriticality;
    //   this.historyScore = this.returnEntry.history;
    //   this.releaseFreqScore = this.returnEntry.releasefrequency;
    //   this.impactScore = this.returnEntry.impact;
    //   this.sharedCompScore = this.returnEntry.sharedcomponent;
    //   this.volumeScore = this.returnEntry.volume;
    //   this.devInHouseScore = this.returnEntry.developedinhouse;
    //   this.provenScaleScore = this.returnEntry.provenscale;

    //   this.totalScore = this.returnEntry.total;
    // }

    this.loadScore(this.newSearch.appname);

    //Send to another component.
  }

  loadScore(appname: string) {
    console.log(appname);
    this.returnEntry = this._appService.searchEntry(appname);

    if (this.returnEntry.appname == "") {
      console.log("Nothing Found");
    } else {
      this.percNewScore = this.returnEntry.percentnew;
      this.complexityScore = this.returnEntry.complexity;
      this.businessCritScore = this.returnEntry.businesscriticality;
      this.historyScore = this.returnEntry.history;
      this.releaseFreqScore = this.returnEntry.releasefrequency;
      this.impactScore = this.returnEntry.impact;
      this.sharedCompScore = this.returnEntry.sharedcomponent;
      this.volumeScore = this.returnEntry.volume;
      this.devInHouseScore = this.returnEntry.developedinhouse;
      this.provenScaleScore = this.returnEntry.provenscale;

      this.totalScore = this.returnEntry.total;
    }
  }

  delete(appname: string){
    console.log(appname);
    this._appService.remove(appname);
    document.getElementById(appname).remove();
    this.percNewScore = 0;
      this.complexityScore = 0;
      this.businessCritScore = 0;
      this.historyScore = 0;
      this.releaseFreqScore = 0;
      this.impactScore = 0;
      this.sharedCompScore = 0;
      this.volumeScore = 0;
      this.devInHouseScore = 0;
      this.provenScaleScore = 0;
  }
}
