import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user?: User;

  constructor(private http: HttpClient) {}
  url = 'http://127.0.0.1:3000/login'; // Reemplaza con la URL de la API que deseas consultar

  async login(email: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const body = { email, password };

      this.http.post<User>(this.url, body, httpOptions).subscribe(
        (data) => {
          this.user = data;
          resolve(data);
        },
        (error) => {
          // Maneja errores aquí y rechaza la promesa con el error
          console.error('Error:', error);
          reject(error);
        }
      );
    });
  }
}
