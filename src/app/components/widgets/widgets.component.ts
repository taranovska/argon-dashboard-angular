import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-widgets",
  templateUrl: "./widgets.component.html",
  styleUrls: ["./widgets.component.scss"],
})
export class WidgetsComponent implements OnInit {
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
