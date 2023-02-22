import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

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
    { label: "Business Unit", link: "BusinessUnit" },
    { label: "Departments", link: "Departments" },
    { label: "Division", link: "Division" },
    { label: "Job Title", link: "Job Title" },
    { label: "Cost Center", link: "Cost Center" },
  ];
  constructor() {}

  ngOnInit() {}
}
