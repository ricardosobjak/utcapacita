import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService) 
  {
    this.form = formBuilder.group({
      username: formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
    /*
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    */
  }

  ngOnInit(): void { }

  /**
 * Método auxiliar para verificar se existe erro em duas situações:
 *  -Qualquer erro no campo
 *  -Um erro específico no campo
 * 
 * @param controlName Nome do controle (campo do form)
 * @param errorName Nome do erro da classe Validators
 * @returns boolean
 */
  hasError(controlName: string, errorName?: string): boolean {
    return errorName
      ? this.form.controls[controlName].hasError(errorName)
      : this.form.controls[controlName].invalid;
  }

  /**
   * Método para fazer o login
   */
  public login() {
    this.submitted = true;

    const username = this.form.value['username'];
    const password = this.form.value['password'];

    this.loginService.login(username, password).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res.token);

    });
  }
}
