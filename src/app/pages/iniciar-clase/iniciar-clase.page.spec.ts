import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarClasePage } from './iniciar-clase.page';
import { User } from 'src/app/models/User';
import { Classes } from 'src/app/models/Classes';

describe('IniciarClasePage', () => {
  let component: IniciarClasePage;
  let fixture: ComponentFixture<IniciarClasePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IniciarClasePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarClasePage);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set myAngularxQrCode to "Missing information" if user or Classes are not defined', () => {
    component.ngOnInit();
    expect(component.myAngularxQrCode).toBe('Missing information');
  });

  it('should set myAngularxQrCode correctly if user and Classes are defined', () => {
    const mockUser: User = {
      name: 'John Doe',
      email: '',
      id: 0,
      lastName: '',
      password: '',
      roleId: 0,
      secondSurname: '',
    };
    const mockClasses: Classes = { id: 0, subject: 'Math', date: new Date() };

    component.user = mockUser;
    component.classes = mockClasses;

    component.ngOnInit();
    expect(component.myAngularxQrCode).toBe(
      `Role: ${mockUser.name}, Subject: ${mockClasses.subject}, Date: ${mockClasses.date}`
    );
  });
});
