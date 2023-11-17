import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsistenciaService {
  private apiUrl = 'URL_DE_TU_API'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener la asistencia del alumno para un ramo específico
  getAsistenciaAlumno(userId: number, subject: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/users/${userId}/asistencia?subject=${subject}`
    );
  }
}
