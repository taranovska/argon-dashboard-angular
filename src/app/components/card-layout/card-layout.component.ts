import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cardLayout",
  templateUrl: "./card-layout.component.html",
  styleUrls: ["./card-layout.component.scss"],
})
export class CardLayoutComponent implements OnInit {
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
