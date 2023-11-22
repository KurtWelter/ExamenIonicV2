import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPage } from './main.page';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';
import { User } from 'src/app/models/User';

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;
  let router: Router;
  let userService: UsersService;

  const mockUser: User = {
    id: 1,
    name: 'John Doe',
    email: '',
    lastName: '',
    password: '',
    roleId: 0,
    secondSurname: '',
  };

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUser']);
    userServiceSpy.user = mockUser;
    userServiceSpy.getUser.and.returnValue(of(mockUser));

    await TestBed.configureTestingModule({
      declarations: [MainPage],
      imports: [RouterTestingModule],
      providers: [{ provide: UsersService, useValue: userServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize user data from the service', () => {
    expect(userService.login).toHaveBeenCalled();
    expect(component.user).toEqual(mockUser);
    expect(component.name).toBe(mockUser.name);
  });

  it('should navigate to asistencia page when Asistencia() is called', () => {
    const routerSpy = spyOn(router, 'navigate');
    component.Asistencia();
    expect(routerSpy).toHaveBeenCalledWith(['asistencia']);
  });
});
