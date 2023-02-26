import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-windows",
  templateUrl: "./modal-windows.component.html",
  styleUrls: ["./modal-windows.component.scss"],
})
export class ModalWindowsComponent implements OnInit {
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
