import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DEFAULT_API } from '../../app.config';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from './login.model';
 
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentTokenSubject: BehaviorSubject<string | null>;
 
  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<string | null>(
      localStorage.getItem('token')
    );
  }
 
  getHttpOption(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
 
  public get currentTokenValue(): string | null {
    return this.currentTokenSubject.value;
  }
 
  public set currentTokenValue(token: string | null) {
    this.currentTokenSubject.next(token);
  }
 
  public login = (username: string, password: string) : Observable<LoginResponse> => {
    const data = JSON.stringify({ username, password });
 
    return this.http.post<LoginResponse>(DEFAULT_API + 'auth', data, {
      headers: this.getHttpOption(),
    });
  };
 
  public logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    this.currentTokenValue = null;
  };
}
