import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  username: string = '';

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['username']) {
      this.username = state['username'];
    }
  }

  ngOnInit() {
    // Aquí puedes obtener el nombre de usuario desde tu servicio o donde lo tengas almacenado
  }
}
