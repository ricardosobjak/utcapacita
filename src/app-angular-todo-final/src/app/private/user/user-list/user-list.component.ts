import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User, UserListResponse } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  apiResponse: User[];

  activePage = 0;
  perPage = 5;

  statusError: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers(this.activePage);
  }

  public loadUsers(page: number) {
    this.activePage = page;

    this.userService
      .getUsers(page, this.perPage)
      .pipe(catchError(err => {
        console.log(err)
        this.statusError = 403;
        return null;
      }))
      .subscribe((res: User[]) => {
        console.log(res);
        this.apiResponse = res;
      });
  }

  deleteUser(user: User) {
    this.userService.delete(user.id)
      .pipe(
        catchError((error) => {
          alert("Falha ao excluir usuário");
          return null;
        })
      )
      .subscribe(() => { this.apiResponse.splice(this.apiResponse.indexOf(user), 1) });
  }

  pages(size: number) {
    return new Array(size).keys();
  }
}
