import { Component } from "@angular/core";
import { mockEmployees } from "src/app/fake-data/employees-mocks";

@Component({
  selector: "employee",
  templateUrl: "./employee.component.html",
})
export class EmployeeComponent {
  employees = mockEmployees();
}
