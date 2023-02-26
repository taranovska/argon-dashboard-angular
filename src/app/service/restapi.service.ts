import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RestapiService {
  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get("http://localhost:8000/employees");
  }
}
