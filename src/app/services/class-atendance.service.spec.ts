import { TestBed } from '@angular/core/testing';

import { ClassAtendanceService } from './class-atendance.service';

describe('ClassAtendanceService', () => {
  let service: ClassAtendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassAtendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
