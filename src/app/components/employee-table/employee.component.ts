import { Component, OnInit } from "@angular/core";
import { mockEmployees } from "src/app/fake-data/employees-mocks";
import { RestapiService } from "./../../service/restapi.service";
import { Employee } from "src/types/domain/employee-model.type";

@Component({
  selector: "employee",
  templateUrl: "./employee.component.html",
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private service: RestapiService) {}

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.service.getAllEmployees().subscribe((data) => {
      this.employees = data as Employee[];
    });
  }
}
