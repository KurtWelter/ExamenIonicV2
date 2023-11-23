import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { RestablecerContrasenaPage } from './restablecer-contrasena.page';

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

  it('should redirect to ingreso-usuario when passwords match', () => {
    spyOn(router, 'navigate');

    component.newPassword = 'newPassword123';
    component.confirmPassword = 'newPassword123';

    component.onSubmit();

    expect(router.navigate).toHaveBeenCalledWith(['/ingreso-usuario']);
  });

  it('should not redirect when passwords do not match', () => {
    spyOn(console, 'error');
    spyOn(router, 'navigate');

    component.newPassword = 'newPassword123';
    component.confirmPassword = 'differentPassword';

    component.onSubmit();

    expect(console.error).toHaveBeenCalledWith('Las contraseñas no coinciden.');
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
