import { Component, OnInit } from '@angular/core';
import { classes } from 'src/app/models/Classes';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-iniciar-clase',
  templateUrl: './iniciar-clase.page.html',
  styleUrls: ['./iniciar-clase.page.scss'],
})
export class IniciarClasePage implements OnInit {
  user: User = {
    email: '',
    id: 0,
    lastName: '',
    name: '',
    password: '',
    roleId: 0,
    secondSurname: '',
  };
  classes: classes = {
    date: '',
    subject: '',
  };
  public myAngularxQrCode!: string;

  constructor() {
    this.user.name = 'NombreUsuario';
    this.classes = { subject: 'Subject', date: 'Fecha' };
  }

  ngOnInit(): void {
    if (this.user && this.classes) {
      this.myAngularxQrCode = `Role: ${this.user.name}, Subject: ${this.classes.subject}, Date: ${this.classes.date}`;
    } else {
      this.myAngularxQrCode = 'Missing information';
    }
  }
}
