import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppEntry } from "src/app/models/app-entry";
import { SearchEntry } from "src/app/models/search-entry";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private _http: HttpClient) {}

  //URL endpoint for user login.(this is just for placeholder for now.)
  _loginUrl = "http://localhost:8080/PokemonCollector/login";

  //list of apps to simulate backend

  public apps = [
    new AppEntry(
      "InsuranceQuote",
      "30.00",
      "5.0",
      "2.4",
      "7.6",
      "5.3",
      "4.2",
      "3.2",
      "5.6",
      "2.8",
      "6.0",
      "93.00"
    ),
    new AppEntry(
      "MortageQuote",
      "45.00",
      "2.6",
      "7.8",
      "9.3",
      "5.4",
      "4.6",
      "6.3",
      "7.8",
      "5.5",
      "6.6",
      "75"
    ),
    new AppEntry(
      "InterestRate",
      "50.00",
      "3.9",
      "3.8",
      "6.5",
      "7.6",
      "2.36",
      "2.14",
      "5.6",
      "2.6",
      "1.3",
      "60"
    ),
  ];

  getAppsArray() {
    return this.apps;
  }
  add(entry: AppEntry) {
    this.apps.push(new AppEntry(entry.appname, entry.percentnew,entry.complexity,entry.impact, entry.businesscriticality, entry.history, entry.releasefrequency, entry.developedinhouse, entry.sharedcomponent, entry.volume, entry.provenscale, entry.total));
    console.log(this.apps);
  }

  remove(appname: string){
    for(let i=0; i<this.apps.length;i++){
      if(this.apps[i].appname==appname){
        console.log("we got here.");
        this.apps.splice(i, 1);
      }
    }
  }

  // Method for adding a new application. AppEntry object passed as parameter has application name and scores.
  appEntry(entry: AppEntry) {
    //To ensure data is being passed to the service. Delete later.
    console.log(
      "Inside AppService entryappName: " +
        entry.appname +
        " entry%new: " +
        entry.percentnew +
        " entryComplexity: " +
        entry.complexity
    );

    return this._http.post<any>(this._loginUrl, entry);
  }

  calculateScore(entry: AppEntry) {
    // Percent New Calculation
    let percNewWeight = 100.0;
    console.log("in calculate");
    console.log(entry.percentnew);
    entry.percentnew = entry.percentnew * percNewWeight;
    console.log("after multiple");
    console.log(entry.percentnew);
    //Complexity Calc

    let complexityWeight = 50.0;

    entry.complexity = entry.complexity * complexityWeight;

    //Impact Calc
    let impactWeight = 70.0;
    entry.impact = entry.impact * impactWeight;

    //Business Criticality
    let criticalityWeight = 100.0;
    entry.businesscriticality = entry.businesscriticality * criticalityWeight;

    //History Calc
    let historyWeight = 100.0;
    entry.history = entry.history * historyWeight;

    //Release Frquency
    let realeaseFrequency = 50.0;
    entry.releasefrequency = entry.releasefrequency * realeaseFrequency;

    //Developed In-house
    let devlopedInHouse = 100.0;
    entry.developedinhouse = entry.developedinhouse * devlopedInHouse;

    //Shared Component
    let sharedCompWeight = 100.0;
    entry.sharedcomponent = entry.sharedcomponent * sharedCompWeight;

    //Volume
    let volumeWeight = 100.0;
    entry.volume = entry.volume * volumeWeight;

    //Proven Scale
    let provenScale = 100.0;
    entry.provenscale = entry.provenscale * provenScale;

    //Calculate Total Score

    let total =
      entry.percentnew +
      entry.complexity +
      entry.impact +
      entry.businesscriticality +
      entry.history +
      entry.releasefrequency +
      entry.developedinhouse +
      entry.sharedcomponent +
      entry.volume +
      entry.provenscale;

    entry.total = total;

    return entry;
  }

  appEntryMock(entry: AppEntry) {
    entry = this.calculateScore(entry);
    console.log("after calculate");
    console.log(entry);
    return entry;
  }

  // Method for searching for an application
  searchEntry(searchEntry: string) {
    //To ensure data is being passed to the service. Delete later.
    console.log("Inside AppService entryappName: " + searchEntry);

    for (let i = 0; i < this.apps.length; i++) {
      if (this.apps[i].appname == searchEntry) {
        return this.apps[i];
      }
    }

    return new AppEntry("", "", "", "", "", "", "", "", "", "", "", "");
  }
}
