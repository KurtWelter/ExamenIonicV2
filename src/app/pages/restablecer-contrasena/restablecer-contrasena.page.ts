import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage {
  username!: string;
  newPassword!: string;
  confirmPassword!: string;

  constructor(private router: Router) {}

  onSubmit() {
    // Verifica que las contraseñas coincidan
    if (this.newPassword === this.confirmPassword) {
      // Lógica para enviar la nueva contraseña
      // Aquí puedes enviar this.username y this.newPassword para restablecer la contraseña en tu backend
      console.log('Nombre de usuario:', this.username);
      console.log('Nueva Contraseña:', this.newPassword);

      // Redirige a la página de ingreso-usuario
      this.router.navigate(['/ingreso-usuario']);
    } else {
      // Las contraseñas no coinciden, puedes mostrar un mensaje de error
      console.error('Las contraseñas no coinciden.');
    }
  }
}
