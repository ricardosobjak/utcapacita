import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { API_BASE } from 'src/app/app.config';
import { PersonListResult, PersonSingleResult } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  /**
   * Método para obter uma lista de pessoas da API
   */
  public getAll(): Observable<PersonListResult> {
    return this.http.get<PersonListResult>(API_BASE + 'users').pipe(retry(1));
  }

  /**
   * Obter uma Pessoa da API
   */
  public getPerson(id: number): Observable<PersonSingleResult> {
    return this.http
      .get<PersonSingleResult>(API_BASE + 'users/' + id)
      .pipe(retry(1));
  }
}
