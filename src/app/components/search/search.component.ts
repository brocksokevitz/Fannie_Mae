import { Component, OnInit } from '@angular/core';
import { SearchEntry } from "src/app/models/search-entry";
import { AppService } from "src/app/services/app.service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  newSearch = new SearchEntry("");
  constructor(private _appService: AppService) {}

  ngOnInit() {
  }

  onSubmit() {
    //Just to verify that the data is being recieved from the form. Delete later.
    console.log(
      "Start onSubmit() : newSearch: " +
        this.newSearch.appname
    );

    console.log(this._appService.searchEntry(this.newSearch));


  }

}
