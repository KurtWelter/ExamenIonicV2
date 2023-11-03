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
  errorMessages: any = {}; // Para almacenar mensajes de error

  constructor(private router: Router) {}

  onSubmit() {
    // Reiniciar los mensajes de error
    this.errorMessages = {};

    if (!this.username) {
      this.errorMessages.username = 'Debes ingresar un nombre de usuario.';
    }

    if (!this.password) {
      this.errorMessages.password = 'Debes ingresar una contraseña.';
    }

    if (this.username && this.password) {
      if (this.username === 'admin' && this.password === 'admin') {
        console.log('Inicio de sesión exitoso.');
        this.router.navigate(['main'], {
          state: { username: this.username },
        });
      } else {
        this.errorMessages.auth =
          'Credenciales incorrectas. Inténtalo de nuevo.';
      }
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
