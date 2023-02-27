import { Component, OnInit } from "@angular/core";
import { RestapiService } from "./../../service/restapi.service";
import { Employee } from "src/types/domain/employee-model.type";
import { ColDef } from "ag-grid-community";

@Component({
  selector: "employee",
  templateUrl: "./employee.component.html",
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  rowData: any[] = [
    { id: 1, firstName: "John", lastName: "Doe", email: "email.com" },
  ];
  colDefs: ColDef[] = [
    { field: "id", sortable: true, filter: true, checkboxSelection: true },
    { field: "firstName", sortable: true, filter: true },
    { field: "lastName", sortable: true, filter: true },
    { field: "email", sortable: true, filter: true },
  ];
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
