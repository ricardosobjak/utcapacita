import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  constructor(private http: HttpClient) {}

  /**
   * Método para obter uma lista de pessoas da API
   */
  public getAll() {
    return this.http
      .get('https://reqres.in/api/users')
      .pipe(retry(1));
  }
}
