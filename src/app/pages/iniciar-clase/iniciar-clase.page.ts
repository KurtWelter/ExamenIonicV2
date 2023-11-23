import { Component, OnInit } from '@angular/core';
import { Classes } from 'src/app/models/Classes';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

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
  classes: Classes = {
    id: 0,
    date: new Date(),
    subject: '',
  };
  public myAngularxQrCode!: string;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.myAngularxQrCode = id; // Aquí obtienes el valor del parámetro 'id' de la URL
      console.log(id);
      // Utiliza el valor de 'id' como necesites en esta página
    });
  }

  ngOnInit(): void {}
}
