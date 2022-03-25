import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  { path: 'new', component: PersonFormComponent },
  { path: ':id', component: PersonFormComponent },
];

@NgModule({
  declarations: [PersonFormComponent, PersonListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PersonModule {}
