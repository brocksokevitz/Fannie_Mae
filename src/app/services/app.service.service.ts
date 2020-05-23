import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppEntry } from "src/app/models/app-entry";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private _http: HttpClient) {}

  //URL endpoint for user login.(this is just for placeholder for now.)
  _loginUrl = "http://localhost:8080/PokemonCollector/login";

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
}
