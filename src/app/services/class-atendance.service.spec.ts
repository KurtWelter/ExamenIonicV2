import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ClassAtendanceService } from './class-atendance.service';
import { Classes } from '../models/Classes';

describe('ClassAtendanceService', () => {
  let service: ClassAtendanceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClassAtendanceService],
    });

    service = TestBed.inject(ClassAtendanceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch classes', async () => {
    const mockClasses: Classes[] = [
      { id: 1, date: new Date(), subject: 'Matematicas' },
      { id: 2, date: new Date(), subject: 'Programacion Web' },
    ];

    service.getClasses().then((data) => {
      expect(data).toEqual(mockClasses);
    });

    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('GET');

    req.flush(mockClasses);
  });

  it('should attend a class', async () => {
    const userId = 1;
    const classId = 1;
    const mockClass: Classes = {
      id: classId,
      date: new Date(),
      subject: '',
    };

    service.attendsClass(userId, classId).then((data) => {
      expect(data).toEqual(mockClass);
    });

    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('POST');

    req.flush(mockClass);
  });
});
