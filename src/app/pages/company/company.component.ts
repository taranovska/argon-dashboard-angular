import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"],
})
export class CompanyComponent implements OnInit {
  tabs = [
    { label: "Setup", link: "Setup" },
    { label: "Organization", link: "Organization" },
    { label: "Employees", link: "Employees" },
    { label: "Business Units", link: "BusinessUnits" },
    { label: "Departments", link: "Departments" },
    { label: "Division", link: "Division" },
    { label: "Job Titles", link: "Job Titles" },
    { label: "Cost Center", link: "Cost Center" },
    { label: "Groups", link: "Groups" },
    { label: "Teams", link: "Teams" },
    { label: "Analytics", link: "Analytics" },
    { label: "Contracts", link: "Contracts" },
  ];

  activeTab = this.tabs[0].label;

  constructor() {}

  ngOnInit() {}

  setActiveTab(tab) {
    this.activeTab = tab.label;
  }
}
