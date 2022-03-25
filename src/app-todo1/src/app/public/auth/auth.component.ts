import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: formBuilder.control(''),
      password: formBuilder.control(''),
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
   * Método para fazer o login
   */
  public login() {
    console.log(this.form);
    
    console.log(this.form.controls['username'].value);
    console.log(this.form.value['password']);
  }
}
