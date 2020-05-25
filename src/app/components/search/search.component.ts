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
    //submit logic for when we get persistent data
    // console.log(        this.constant.get()    );

    // for (let i = 0; i < this._appService.constant.length(); i++) {
    //   if(this._appService.constant.getValue(i).appname == this.newSearch.appname){
    //     return this._appService.constant.getValue(i);
    //   }
    // }

  }

}
