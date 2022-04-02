import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError, of, throwError } from 'rxjs';
import { Person, } from '../person.model';
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
      name: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      birth: new FormControl(''),
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
          .subscribe((res: Person) => {
            this.state = 'edit';
            this.person = res;
            this.updateView(this.person); //atualizar a view (form)
          });
      }
    });
  }

  public updateView(p: Person) {
    this.form.controls['name'].setValue(p.name);
    this.form.controls['login'].setValue(p.login);
    this.form.controls['birth'].setValue(p.birth);
    this.form.controls['password'].setValue(p.password);
    this.form.controls['email'].setValue(p.email);
  }

  public save() {
    const f = this.form.value;
    const person = new Person();

    this.person.name = f['name'];
    this.person.login = f['login'];
    this.person.password = f['password'];
    this.person.birth = f['birth'];
    this.person.email = f['email'];

    this.personService.create(person)
      .pipe(
        catchError(err => {
          console.error("Erro ao salvar pessoa", err);
          alert("Falha do inserir a pessoa");
          return of(new Person());
        })
      )
      .subscribe((res: Person) => {
        console.log("Pessoa salvar: ", res);
        alert("Pessoa inserida com sucesso");
      });
  }
}
