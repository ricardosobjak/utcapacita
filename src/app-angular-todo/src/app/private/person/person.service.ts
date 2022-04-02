import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { DEFAULT_API } from 'src/app/app.config';
import { LoginService } from 'src/app/public/auth/login.service';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  constructor(private http: HttpClient, public loginService: LoginService) { }

  getHttpOptions(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.loginService.currentTokenValue as string
    });
  }

  /**
   * Método para obter uma lista de pessoas da API
   */
  public getAll(): Observable<Person[]> {
    return this.http
      .get<Person[]>(DEFAULT_API + 'user',
        { headers: this.getHttpOptions() }
      )
      .pipe(retry(1));
  }

  /**
   * Obter uma Pessoa da API
   * @param {number} id ID da pessoa
   * @returns {Observable<PersonSingleResult>}
   */
  public getPerson(id: number): Observable<Person> {
    return this.http
      .get<Person>(DEFAULT_API + 'user/' + id, { headers: this.getHttpOptions() })
      .pipe(retry(1));
  }
}
