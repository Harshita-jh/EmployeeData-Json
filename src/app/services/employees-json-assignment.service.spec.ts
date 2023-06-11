import { TestBed } from '@angular/core/testing';

import { EmployeesJsonAssignmentService } from './employees-json-assignment.service';

describe('EmployeesJsonAssignmentService', () => {
  let service: EmployeesJsonAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesJsonAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
