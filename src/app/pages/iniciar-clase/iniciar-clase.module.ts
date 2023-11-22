import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';

import { IniciarClasePageRoutingModule } from './iniciar-clase-routing.module';

import { IniciarClasePage } from './iniciar-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarClasePageRoutingModule,
    QRCodeModule,
  ],
  declarations: [IniciarClasePage],
})
export class IniciarClasePageModule {}
