import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  isUpdate: boolean = false;
  form: FormGroup;
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  get title() {
    return this.isUpdate ? 'Editar usuário' : 'Novo usuário';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      login: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      birth: this.formBuilder.control(''),
      type: this.formBuilder.control('user'),
    });

    this.route.params.subscribe((params) => {
      console.log(params);

      if (params['id']) {
        this.isUpdate = true;

        this.userService.getUser(params['id']).subscribe((res: User) => {
          this.user = res;
          this.updateForm(this.user);
        });
      }
    });
  }

  updateForm(user: User) {
    this.form.controls['name'].setValue(user.name);
    this.form.controls['email'].setValue(user.email);
    this.form.controls['birth'].setValue(user.birth);
    this.form.controls['type'].setValue(user.type);
    this.form.controls['login'].setValue(user.login);
  }

  saveOrUpdate() {
    const u = new User();
    u.name = this.form.value.name;
    u.birth = this.form.value.birth;
    u.email = this.form.value.email;
    u.type = this.form.value.type;
    u.login = this.form.value.login;
    u.password = this.form.value.password;

    if (this.isUpdate && this.user?.id) u.id = this.user.id;

    this.userService
      .createOrUpdate(u)
      .pipe(
        catchError((err) => {
          console.log(err);
          alert('Falha ao salvar o usuário. ' + err.error);
          return err;
        })
      )
      .subscribe((res) => {
        console.log(res);
        alert('Usuário salvo com sucesso');

        this.router.navigateByUrl('/app/user');
      });
  }

  showForm() {
    return this.isUpdate && this.user || !this.isUpdate;
  }
}
