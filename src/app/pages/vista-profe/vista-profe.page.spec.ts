import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaProfePage } from './vista-profe.page';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';
import { User } from 'src/app/models/User';

describe('VistaProfePage', () => {
  let component: VistaProfePage;
  let fixture: ComponentFixture<VistaProfePage>;
  let userService: jasmine.SpyObj<UsersService>;
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
    const userServiceSpy = jasmine.createSpyObj('UsersService', ['login']);
    (userServiceSpy.login as jasmine.Spy).and.returnValue(of(mockUser));

    await TestBed.configureTestingModule({
      declarations: [VistaProfePage],
      imports: [RouterTestingModule],
      providers: [{ provide: UsersService, useValue: userServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaProfePage);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize user data from the service', () => {
    fixture.detectChanges();

    expect(userService.login).toHaveBeenCalled();
    expect(component.user).toEqual(mockUser);
    expect(component.name).toBe(mockUser.name);
  });

  it('should navigate to iniciar-clase page when iniciarClase() is called', () => {
    const routerSpy = spyOn(component.router, 'navigate');
    component.iniciarClase();
    expect(routerSpy).toHaveBeenCalledWith(['iniciar-clase']);
  });
});
