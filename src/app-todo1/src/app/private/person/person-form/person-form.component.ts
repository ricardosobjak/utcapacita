import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MaxValidator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Person, PersonSingleResult } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  state: string = 'new'; // Indica o tipo de operação no componente
  person!: Person;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);

      if (!params['id']) {
        this.state = 'new';
      } else {
        this.personService
          .getPerson(params['id'])
          .subscribe((res: PersonSingleResult) => {
            this.state = 'edit';
            this.person = res.data;
            this.updateView(this.person); //atualizar a view (form)
          });
      }
    });
  }

  public updateView(p: Person) {
    this.form.controls['firstName'].setValue(p.first_name);
    this.form.controls['lastName'].setValue(p.last_name);
    this.form.controls['email'].setValue(p.email);
  }
}
