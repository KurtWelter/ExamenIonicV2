import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-vista-profe',
  templateUrl: './vista-profe.page.html',
  styleUrls: ['./vista-profe.page.scss'],
})
export class VistaProfePage implements OnInit {
  name: string = '';
  user?: User;

  constructor(
    public router: Router,
    http: HttpClient,
    private userService: UsersService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit() {
    if (this.userService.user) {
      this.user = this.userService.user;
      this.name = this.userService.user?.name;
    }
  }

  iniciarClase() {
    this.router.navigate(['iniciar-clase']);
  }
}
