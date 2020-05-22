import { Component, OnInit } from "@angular/core";
import { AppEntry } from "src/app/models/app-entry";
import { AppService } from "src/app/services/app.service.service";

@Component({
  selector: "app-add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.css"],
})
export class AddFormComponent implements OnInit {
  entry = new AppEntry("", "", "", "", "", "", "", "", "", "", "");

  constructor(private _appService: AppService) {}

  ngOnInit() {}
}
