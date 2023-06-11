import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesJsonAssignmentService {

  private url:string = "assets/employees.json"
  constructor(private http: HttpClient) { }
  getEmployeesInfo(){
    return this.http.get(this.url)
  }
}
