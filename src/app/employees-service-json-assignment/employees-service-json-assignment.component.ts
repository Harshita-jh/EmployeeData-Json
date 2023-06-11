import { Component } from '@angular/core';
import { EmployeesJsonAssignmentService } from '../services/employees-json-assignment.service';

@Component({
  selector: 'app-employees-service-json-assignment',
  templateUrl: './employees-service-json-assignment.component.html',
  styleUrls: ['./employees-service-json-assignment.component.css']
})
export class EmployeesServiceJsonAssignmentComponent {
  searchText:string= "";
  
  employees:any = [];
  result:any;
  constructor(private emp:EmployeesJsonAssignmentService){
    this.emp.getEmployeesInfo().subscribe((resp: any) => this.employees=resp)
  }
}
