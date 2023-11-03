import { Component, OnInit } from '@angular/core';
import { DjangoService } from '../services/django.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  constructor(private api: DjangoService) {}

  ngOnInit() {}

  listar() {
    this.api.listarPost().subscribe(
      (users) => {
        console.log(users);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
