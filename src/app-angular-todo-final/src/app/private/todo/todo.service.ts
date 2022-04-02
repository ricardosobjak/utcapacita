import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DEFAULT_API } from 'src/app/app.const';
import { ToDo } from './todo.model';
import { LoginService } from 'src/app/public/login.service';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private http: HttpClient, private loginService: LoginService) { }

  getHttpOptions(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.loginService.currentTokenValue
    });
  }

  public getToDos = (): Observable<ToDo[]> => {
    return this.http.get<ToDo[]>(DEFAULT_API + 'todo', { headers: this.getHttpOptions() });
  };

  public create = (todo: ToDo): Observable<ToDo> => {
    console.log(this.getHttpOptions());

    return this.http.post<ToDo>(DEFAULT_API + 'todo', JSON.stringify(todo), {
      headers: this.getHttpOptions(),
    });
  };

  public update = (todo: ToDo): Observable<ToDo> => {
    return this.http.put<ToDo>(
      `${DEFAULT_API}todo/${todo.id}`,
      JSON.stringify(todo),
      { headers: this.getHttpOptions() }
    );
  };

  public createOrUpdate = (todo: ToDo): Observable<ToDo> => {
    console.log(todo)
    return todo.id ? this.update(todo) : this.create(todo);
  };

  public delete = (id: number) => {
    return this.http.delete(`${DEFAULT_API}todo/${id}`, { headers: this.getHttpOptions() });
  };

}
