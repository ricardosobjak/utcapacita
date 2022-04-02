import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { catchError, finalize, throwError } from 'rxjs';
import { User } from 'src/app/private/user/user.model';

interface LoginResponse {
  token: string;
  user: User;
  loggedIn: Date;
  expiresIn: Date;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  loading = false;
  form: FormGroup;

  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('', [
        Validators.required,
        //Validators.email,
      ]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  public hasError(controlName: string, errorName?: string): boolean {
    return errorName ? this.form.controls[controlName].hasError(errorName) : this.form.controls[controlName].invalid;
  }

  public onSubmit = () => {
    this.message = undefined;
    this.submitted = true;

    if (this.form.invalid) return;

    console.log('onSubmit');
    console.log(this.form.valid);
    console.log(this.form.value.username);
    console.log(this.form);

    this.loading = true;

    this.loginService
      .login(this.form.value.username, this.form.value.password)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.message = err.error.error.toString();
          return throwError(() => err);
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((res: LoginResponse) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('login', JSON.stringify(res));
        this.loginService.currentTokenValue = res.token;
        this.router.navigate(['/app']);
      });
  };
}
