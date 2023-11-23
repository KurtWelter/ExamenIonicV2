import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage {
  email: string = '';
  password: string = '';
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  errorMessages: any = {}; // Para almacenar mensajes de error

  constructor(private router: Router, private usersService: UsersService) {}

  async onSubmit() {
    // Reiniciar los mensajes de error
    this.errorMessages = {};

    if (!this.email) {
      this.errorMessages.email = 'Debes ingresar un nombre de usuario.';
    }

    if (!this.password) {
      this.errorMessages.password = 'Debes ingresar una contraseña.';
    }

    if (this.email && this.password) {
      const user: User = await this.usersService.login(
        this.email,
        this.password
      );
      console.log(user.roleId);
      if (user.roleId == 2) {
        this.router.navigate(['main']);
      } else if (user.roleId == 1) {
        this.router.navigate(['vista-profe']);
      } else if (user.roleId == 3) {
        this.router.navigate(['main']);
      } else if (user.roleId == 4) {
        this.router.navigate(['main']);
      } else if (user.roleId == 5) {
        this.router.navigate(['main']);
      } else if (user.roleId == 6) {
        this.router.navigate(['main']);
      } else if (user.roleId == 7) {
        this.router.navigate(['vista-profe']);
      }
    }
  }

  onFieldBlur(field: string) {
    if (field === 'email') {
      this.emailTouched = true;
    } else if (field === 'password') {
      this.passwordTouched = true;
    }
  }

  navigateToRestablecerContrasena() {
    this.router.navigate(['restablecer-contrasena']);
  }
}
