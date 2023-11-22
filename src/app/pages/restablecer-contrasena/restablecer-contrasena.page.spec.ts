import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RestablecerContrasenaPage } from './restablecer-contrasena.page';
import { Router } from '@angular/router';

describe('RestablecerContrasenaPage', () => {
  let component: RestablecerContrasenaPage;
  let fixture: ComponentFixture<RestablecerContrasenaPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestablecerContrasenaPage],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RestablecerContrasenaPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to ingreso-usuario page when passwords match', () => {
    const routerSpy = spyOn(router, 'navigate');

    component.username = 'exampleUser';
    component.newPassword = 'newPassword';
    component.confirmPassword = 'newPassword'; // Matching passwords

    component.onSubmit();
    expect(routerSpy).toHaveBeenCalledWith(['/ingreso-usuario']);
  });

  it('should log an error when passwords do not match', () => {
    const routerSpy = spyOn(router, 'navigate');

    component.username = 'exampleUser';
    component.newPassword = 'newPassword';
    component.confirmPassword = 'differentPassword'; // Non-matching passwords

    // Spy on console.error to check if it's called when passwords don't match
    const consoleErrorSpy = spyOn(console, 'error');

    component.onSubmit();
    expect(routerSpy).not.toHaveBeenCalled(); // No navigation
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Las contraseñas no coinciden.'
    );
  });
});
