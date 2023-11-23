import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { User } from '../models/User';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes en el HttpTestingController
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call login and return a user', (done: DoneFn) => {
    const mockUser: User = {
      id: 2,
      name: 'Alfredo',
      email: 'a@gmail.com',
      lastName: 'Muñoz',
      password: '2',
      roleId: 2,
      secondSurname: 'Brenning',
    };
    const email = 'a@gmail.com';
    const password = '2';

    service.login(email, password).then((user: User) => {
      expect(user).toEqual(mockUser);
      expect(service.user).toEqual(mockUser); // Verifica si el usuario se guardó correctamente en el servicio
      done();
    });

    const req = httpMock.expectOne('http://127.0.0.1:3000/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockUser); // Simula la respuesta del servidor con el usuario mockUser
  });

  it('should handle an error when login fails', (done: DoneFn) => {
    const email = 'a@gmail.com';
    const password = '2';

    service.login(email, password).catch((error: any) => {
      expect(error).toBeTruthy();
      done();
    });

    const req = httpMock.expectOne('http://127.0.0.1:3000/login');
    expect(req.request.method).toBe('POST');
    req.error(new ErrorEvent('Network error')); // Simula un error en la solicitud HTTP
  });
});
