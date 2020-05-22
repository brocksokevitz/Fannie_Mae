import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public apps = [{"Application Name": "First App", "Total Weighted Score":90,"% New":9,"Complexity":9,"Impact":9,"Business criticality":9,"History":9,"Release frequency":9,"Developed In-house":9,"Shared Component":9,"Volume":9,"Proven scale":9},
  {"Application Name": "Second App", "Total Weighted Score":90,"% New":9,"Complexity":9,"Impact":9,"Business criticality":9,"History":9,"Release frequency":9,"Developed In-house":9,"Shared Component":9,"Volume":9,"Proven scale":9},
  {"Application Name": "Third App", "Total Weighted Score":90,"% New":9,"Complexity":9,"Impact":9,"Business criticality":9,"History":9,"Release frequency":9,"Developed In-house":9,"Shared Component":9,"Volume":9,"Proven scale":9}
  ];

  constructor() {}

  ngOnInit() {
  }

}
