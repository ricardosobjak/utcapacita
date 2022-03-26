import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MaxValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required, 
        Validators.email
      ])
    });
  }

  ngOnInit(): void {}
}
