import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesServiceJsonAssignmentComponent } from './employees-service-json-assignment.component';

describe('EmployeesServiceJsonAssignmentComponent', () => {
  let component: EmployeesServiceJsonAssignmentComponent;
  let fixture: ComponentFixture<EmployeesServiceJsonAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesServiceJsonAssignmentComponent]
    });
    fixture = TestBed.createComponent(EmployeesServiceJsonAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
