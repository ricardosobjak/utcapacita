import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserListResponse, User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DEFAULT_API } from 'src/app/app.const';
import { LoginService } from 'src/app/public/login.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private loginService: LoginService) { }

  getHttpOptions(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.loginService.currentTokenValue
    });
  }

  public getUsers = (
    page?: number,
    perPage?: number
  ): Observable<User[]> => {
    let params = [];
    if (page) params = params.concat(`page=${page}`);
    if (perPage) params = params.concat(`size=${perPage}`);

    console.log(params);

    return this.http.get<User[]>(
      DEFAULT_API + 'user' + (params.length > 0 ? '?' + params.join('&') : ''), {
      headers: this.getHttpOptions(),
    });
  };

  public getUser = (id: number): Observable<User> => {
    return this.http.get<User>(DEFAULT_API + 'user/' + id, {
      headers: this.getHttpOptions(),
    });
  };

  public create = (user: User): Observable<User> => {
    return this.http.post<User>(DEFAULT_API + 'user', JSON.stringify(user), {
      headers: this.getHttpOptions(),
    });
  };

  public update = (user: User): Observable<User> => {
    return this.http.put<User>(
      `${DEFAULT_API}user/${user.id}`,
      JSON.stringify(user),
      { headers: this.getHttpOptions() }
    );
  };

  public createOrUpdate = (user: User): Observable<User> => {
    return user.id ? this.update(user) : this.create(user);
  };

  public delete = (id: number) => {
    return this.http.delete(`${DEFAULT_API}user/${id}`, { headers: this.getHttpOptions() });
  };
}