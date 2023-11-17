import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { RolesService } from 'src/app/services/roles.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage {
  email: string = 'a@gmail.com';
  password: string = '1';
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  errorMessages: any = {}; // Para almacenar mensajes de error

  constructor(
    private router: Router,
    private rolesService: RolesService,
    private usersService: UsersService
  ) {}

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
      } else {
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

  bringroles() {
    this.rolesService.getRoles();
  }
}
