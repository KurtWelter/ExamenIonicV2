import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { retry } from 'rxjs/internal/operators/retry';

@Injectable({
  providedIn: 'root',
})
export class DjangoService {
  apiURL = 'http://127.0.0.1:8000/api/';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(public http: HttpClient) {}

  listarPost(): Observable<any> {
    return this.http.get(this.apiURL + '/lista_usuario').pipe(retry(3));
  }
}
