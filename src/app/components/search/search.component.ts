import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public apps = {"app1": {"Application Name": "First App", "Total Weighted Score":"","% New":"","Complexity":"","Impact":"","Business criticality":"","History":"","Release frequency":"","Developed In-house":"","Shared Component":"","Volume":"","Proven scale":""},
"app2": {},
"app3": {}
};

  constructor() { }

  ngOnInit() {
  }

}
