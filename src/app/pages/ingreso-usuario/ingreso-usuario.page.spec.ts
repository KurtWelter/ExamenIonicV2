import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IngresoUsuarioPage } from './ingreso-usuario.page';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('IngresoUsuarioPage', () => {
  let component: IngresoUsuarioPage;
  let fixture: ComponentFixture<IngresoUsuarioPage>;
  let usersService: jasmine.SpyObj<UsersService>;
  let router: Router;

  beforeEach(async () => {
    const usersServiceSpy = jasmine.createSpyObj('UsersService', ['login']);

    await TestBed.configureTestingModule({
      declarations: [IngresoUsuarioPage],
      imports: [RouterTestingModule],
      providers: [{ provide: UsersService, useValue: usersServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoUsuarioPage);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to main when roleId is 2', async () => {
    const mockUser: User = {
      email: 'a@gmail.com',
      id: 2,
      lastName: 'Muñoz',
      name: 'Alfredo',
      roleId: 2, // Simula un usuario con roleId 2
      password: '2',
      secondSurname: 'Brenning',
    };
    usersService.login.and.returnValue(Promise.resolve(mockUser));

    await component.onSubmit();

    expect(router.navigate).toHaveBeenCalledWith(['main']);
  });

  it('should navigate to vista-profe when roleId is 1', async () => {
    const mockUser: User = {
      email: 'MailtoSebastian3@gmail.com',
      id: 1,
      lastName: 'KKK',
      name: 'Kurt',
      roleId: 1, // Simula un usuario con roleId 1
      password: '1',
      secondSurname: 'sss',
    };
    usersService.login.and.returnValue(Promise.resolve(mockUser));

    await component.onSubmit();

    expect(router.navigate).toHaveBeenCalledWith(['vista-profe']);
  });

  // Agrega más pruebas para otros escenarios y comportamientos en tu componente
});
