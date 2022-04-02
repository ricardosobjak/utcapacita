import { Component, OnInit } from '@angular/core';
import { Person, PersonListResult } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  public loadPeople() {
    this.personService.getAll().subscribe((res: PersonListResult) => {
      console.log(res);
      this.people = res.data;
    });
  }
}
