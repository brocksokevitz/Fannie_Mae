import { Component, OnInit } from "@angular/core";
import { SearchEntry } from "src/app/models/search-entry";
import { AppEntry } from "src/app/models/app-entry";
import { AppService } from "src/app/services/app.service.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
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

  newSearch = new SearchEntry("");
  returnEntry = new AppEntry("", "", "", "", "", "", "", "", "", "", "", "");
  constructor(private _appService: AppService) {}

  ngOnInit() {}

  onSubmit() {
    //Just to verify that the data is being recieved from the form. Delete later.
    console.log("Start onSubmit() : newSearch: " + this.newSearch.appname);

    console.log(this._appService.searchEntry(this.newSearch));

    this.returnEntry = this._appService.searchEntry(this.newSearch);

    //Check for valid return value

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

    //Send to another component.
  }
}
