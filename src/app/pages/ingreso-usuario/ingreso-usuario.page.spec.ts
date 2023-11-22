import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { IngresoUsuarioPage } from './ingreso-usuario.page';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles.service';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';
import { User } from 'src/app/models/User';

describe('IngresoUsuarioPage', () => {
  let component: IngresoUsuarioPage;
  let fixture: ComponentFixture<IngresoUsuarioPage>;
  let router: Router;
  let rolesService: jasmine.SpyObj<RolesService>;
  let usersService: jasmine.SpyObj<UsersService>;
  const mockUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'a@gmail.com',
    password: '1',
    roleId: 2,
    lastName: '',
    secondSurname: '',
  };

  beforeEach(async () => {
    const rolesServiceSpy = jasmine.createSpyObj('RolesService', ['getRoles']);
    const usersServiceSpy = jasmine.createSpyObj('UsersService', ['login']);
    usersServiceSpy.login.and.returnValue(Promise.resolve(mockUser));

    await TestBed.configureTestingModule({
      declarations: [IngresoUsuarioPage],
      imports: [RouterTestingModule],
      providers: [
        { provide: RolesService, useValue: rolesServiceSpy },
        { provide: UsersService, useValue: usersServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoUsuarioPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    rolesService = TestBed.inject(RolesService) as jasmine.SpyObj<RolesService>;
    usersService = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to main page when a user with roleId 2 logs in', fakeAsync(() => {
    component.email = 'a@gmail.com';
    component.password = '1';
    component.onSubmit();
    tick(); // Esperar a que se resuelva la promesa

    expect(usersService.login).toHaveBeenCalledWith('a@gmail.com', '1');
    expect(router.navigate).toHaveBeenCalledWith(['main']);
  }));

  it('should navigate to vista-profe page when a user with roleId 1 logs in', fakeAsync(() => {
    const mockUserWithRoleId1: User = { ...mockUser, roleId: 1 };
    usersService.login.and.returnValue(Promise.resolve(mockUserWithRoleId1));

    component.email = 'a@gmail.com';
    component.password = '1';
    component.onSubmit();
    tick(); // Esperar a que se resuelva la promesa

    expect(usersService.login).toHaveBeenCalledWith('a@gmail.com', '1');
    expect(router.navigate).toHaveBeenCalledWith(['vista-profe']);
  }));

  it('should not navigate when no email or password is provided', () => {
    component.onSubmit();

    expect(usersService.login).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  // Agrega pruebas adicionales para las demás funcionalidades del componente según sea necesario
});
