import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage {
  username: string = '';
  password: string = '';
  usernameTouched: boolean = false;
  passwordTouched: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    // Resto del código de autenticación

    // Simulación de autenticación exitosa con credenciales "admin/admin"
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Inicio de sesión exitoso.');
      // Redirige a la página principal (puedes cambiar la ruta según tu aplicación)
      this.router.navigate(['/home']);
    } else {
      console.log('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }

  onFieldBlur(field: string) {
    if (field === 'username') {
      this.usernameTouched = true;
    } else if (field === 'password') {
      this.passwordTouched = true;
    }
  }
  navigateToRestablecerContrasena() {
    this.router.navigate(['restablecer-contrasena']);
  }
}
