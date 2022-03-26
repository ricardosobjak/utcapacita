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


  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  public isValid = (controlName: string) : boolean => {
    return this.form.controls[controlName].valid;
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
