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

  public apps = [new AppEntry("app1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"),
  new AppEntry("b", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"),
  new AppEntry("app3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3")];

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

    // Method for searching for an application
    searchEntry(searchEntry: SearchEntry) {
      //To ensure data is being passed to the service. Delete later.
      console.log(
        "Inside AppService entryappName: " +
          searchEntry.appname
      );
  
      return this._http.post<any>(this._loginUrl, searchEntry);
    }
}
