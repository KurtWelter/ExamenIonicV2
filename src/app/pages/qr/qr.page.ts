import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ClassAtendanceService } from 'src/app/services/class-atendance.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage {
  scanActivate: boolean = false;

  constructor(
    private classAtendanceService: ClassAtendanceService,
    private userService: UsersService
  ) {}

  async enviarCorreo() {
    const body = `Estimado profesor,\n\nEl alumno ha escaneado exitosamente el código QR.\n\nAtentamente,\n${this.userService.user?.name}\n${this.userService.user?.lastName}\n${this.userService.user?.secondSurname}`;

    const emailLink = `mailto:MailtoSebastian3@gmail.com?subject=Confirmación%20de%20escaneo%20de%20QR&body=${encodeURIComponent(
      body
    )}`;

    window.open(emailLink, '_self');
  }

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanActivate = true;
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();

      if (result.hasContent && this.userService.user?.id) {
        const classId = result.content;
        const userId = this.userService.user?.id;
        console.log(classId);
        console.log(userId);
        const respuesta = await this.classAtendanceService.attendsClass(
          userId,
          Number(classId)
        );

        alert(
          `SE HA REGISTRADO CORRECTAMENTE SU CLASE ${respuesta.subject} ${respuesta.date}`
        ); // el contenido del qr vendra por aqui
        this.enviarCorreo();
        //Manejo la data como yo lo quiera.
      } else {
        alert('NO DATA FOUND!');
      }
    } else {
      alert('NOT ALLOWED!');
    }
  }

  stopScanner() {
    BarcodeScanner.startScan();
    this.scanActivate = false;
  }

  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActivate = false;
  }
}
