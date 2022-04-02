import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DEFAULT_API } from '../../app.config';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentTokenSubject: BehaviorSubject<string | undefined>;
 
  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<string>(
      localStorage.getItem('token')
    );
  }
 
  getHttpOption(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
 
  public get currentTokenValue(): string {
    return this.currentTokenSubject.value;
  }
 
  public set currentTokenValue(token: string) {
    this.currentTokenSubject.next(token);
  }
 
  public login = (username: string, password: string) => {
    const data = JSON.stringify({ username, password });
 
    return this.http.post(DEFAULT_API + 'auth', data, {
      headers: this.getHttpOption(),
    });
  };
 
  public logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    this.currentTokenValue = null;
  };
}
