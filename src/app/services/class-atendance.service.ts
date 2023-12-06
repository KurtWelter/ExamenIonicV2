import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classes } from '../models/Classes';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ClassAtendanceService {
  constructor(private http: HttpClient) {}
  url = 'https://spsgftc7-3000.brs.devtunnels.ms/classAttendance '; //http://127.0.0.1:3000/classAttendance //https://spsgftc7-3000.brs.devtunnels.ms/classAttendance

  async getClasses(): Promise<Classes[]> {
    return new Promise<Classes[]>((resolve, reject) => {
      this.http.get<Classes[]>(this.url).subscribe(
        (data) => {
          console.log(data);
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
  async attendsClass(userId: number, classId: number): Promise<Classes> {
    return new Promise<Classes>((resolve, reject) => {
      const body = { userId, classId };

      this.http.post<Classes>(this.url, body, httpOptions).subscribe(
        (data) => {
          console.log(data);
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
