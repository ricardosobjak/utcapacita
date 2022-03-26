import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      let p = new Person();
      p.first_name = 'Pessoa ';
      p.last_name = ' x ' + i;
      p.email = 'mail@mail.com';

      this.people.push(p);
    }
  }

  ngOnInit(): void {}
}
