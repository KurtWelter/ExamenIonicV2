import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaProfePage } from './vista-profe.page';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from 'src/app/services/users.service';
import { ClassAtendanceService } from 'src/app/services/class-atendance.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VistaProfePage', () => {
  let component: VistaProfePage;
  let fixture: ComponentFixture<VistaProfePage>;
  let userService: Partial<UsersService>;
  let classAtendanceService: Partial<ClassAtendanceService>;

  beforeEach(async () => {
    userService = {
      user: {
        id: 1,
        name: 'Kurt',
        email: 'MailtoSebastian3@gmail.com',
        lastName: 'KKK',
        password: '1',
        roleId: 1,
        secondSurname: 'sss',
      },
    };

    await TestBed.configureTestingModule({
      declarations: [VistaProfePage],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: UsersService, useValue: userService },
        { provide: ClassAtendanceService, useValue: classAtendanceService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize with user name and classes', () => {
    expect(component.name).toEqual('Kurt'); // Comprobar si el nombre del usuario se ha asignado correctamente

    component.ngOnInit();

    expect(component.classes?.length).toEqual(2); // Comprobar si se han cargado las clases
    expect(component.classes?.[0]?.id).toEqual(1); // Verificar la primera clase
    expect(component.classes?.[1]?.id).toEqual(2); // Verificar la segunda clase
  });
});
