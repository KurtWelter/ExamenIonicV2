import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface User {
  usuario: string;
  contraseña: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private local!: Storage;
  public autenticado!: boolean;

  constructor(private storage: Storage, private router: Router) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this.local = storage;
  }

  async IngresoUsuarioPage(
    usuario: string,
    contraseña: string
  ): Promise<boolean> {
    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find(
      (us: User) => us.usuario === usuario && us.contraseña === contraseña
    );
    if (user) {
      this.autenticado = true;
      return true;
    }
    this.autenticado = false;
    return false;
  }
}
