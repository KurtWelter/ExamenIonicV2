import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  name: string = '';
  user?: User;

  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit() {
    if (this.userService.user) {
      this.user = this.userService.user;
      this.name = this.userService.user?.name;
    }
  }
  Asistencia() {
    this.router.navigate(['asistencia']);
  }

  qr() {
    this.router.navigate(['qr']);
  }
}
