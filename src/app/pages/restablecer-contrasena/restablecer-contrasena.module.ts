import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { IonicModule } from '@ionic/angular';

import { RestablecerContrasenaPageRoutingModule } from './restablecer-contrasena-routing.module';

import { RestablecerContrasenaPage } from './restablecer-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerContrasenaPageRoutingModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [RestablecerContrasenaPage],
})
export class RestablecerContrasenaPageModule {}
