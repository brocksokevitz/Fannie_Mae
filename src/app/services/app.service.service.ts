import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppEntry } from "src/app/models/app-entry";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private _http: HttpClient) {}

  appEntry(entry: AppEntry) {
    //return this._http.post<any>(this._loginUrl, user);
  }
}
