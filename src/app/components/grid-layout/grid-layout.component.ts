import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gridLayout",
  templateUrl: "./grid-layout.component.html",
  styleUrls: ["./grid-layout.component.scss"],
})
export class GridLayoutComponent implements OnInit {
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
