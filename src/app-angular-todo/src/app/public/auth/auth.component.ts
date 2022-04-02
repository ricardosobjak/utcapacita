import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
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

  ngOnInit(): void {}

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
    console.log(this.form.controls['username'].errors);

    this.submitted = true;

    console.log(this.form);

    console.log(this.form.controls['username'].value);
    console.log(this.form.value['password']);
  }
}
