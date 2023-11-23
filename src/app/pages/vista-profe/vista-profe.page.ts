import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { ClassAtendanceService } from 'src/app/services/class-atendance.service';
import { Classes } from 'src/app/models/Classes';

@Component({
  selector: 'app-vista-profe',
  templateUrl: './vista-profe.page.html',
  styleUrls: ['./vista-profe.page.scss'],
})
export class VistaProfePage implements OnInit {
  name?: string = '';
  user?: User;
  classes?: Classes[];

  constructor(
    public router: Router,
    http: HttpClient,
    private userService: UsersService,
    private classAtendanceService: ClassAtendanceService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit() {
    this.getClasses();
    this.name = this.userService.user?.name;
  }
  navigateToSiguientePagina(id: number) {
    this.router.navigate(['iniciar-clase', id]);
  }
  async getClasses() {
    this.classes = await this.classAtendanceService.getClasses();
  }
}
