import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor(private http: HttpClient) {}
  url = 'http://127.0.0.1:3000/roles'; // Reemplaza con la URL de la API que deseas consultar

  getRoles() {
    this.http.get(this.url).subscribe(
      (data) => {
        // Manipula la respuesta aquí
        //return data;

        console.log(data);
      },
      (error) => {
        // Maneja errores aquí
        console.error('Error:', error);
      }
    );
  }
}
