import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-examples",
  templateUrl: "./examples.component.html",
  styleUrls: ["./examples.component.scss"],
})
export class ExamplesComponent implements OnInit {
  layoutMenuTabs: string[] = [
    "Grid Layout",
    "Card Layout",
    "Accordion",
    "Offcanvas",
  ];

  formsMenuTabs: string[] = ["Widgets", "Alerts", "Modal Windows"];

  pagesMenuTabs: string[] = ["Timeline", "Profile", "Product Compare"];

  iconsMenuTabs: string[] = ["Font Awesome Icons"];

  activeTab = "Grid Layout";

  constructor() {}
  ngOnInit(): void {}

  setActiveTab(tab) {
    this.activeTab = tab;
  }
}
