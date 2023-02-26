import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-offcanvas",
  templateUrl: "./offcanvas.component.html",
  styleUrls: ["./offcanvas.component.scss"],
})
export class OffcanvasComponent implements OnInit {
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
