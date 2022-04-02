import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { DEFAULT_API } from 'src/app/app.config';
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
    return this.http.get<PersonListResult>(DEFAULT_API + 'users').pipe(retry(1));
  }

  /**
   * Obter uma Pessoa da API
   * @param {number} id ID da pessoa
   * @returns {Observable<PersonSingleResult>}
   */
  public getPerson(id: number): Observable<PersonSingleResult> {
    return this.http
      .get<PersonSingleResult>(DEFAULT_API + 'users/' + id)
      .pipe(retry(1));
  }
}
