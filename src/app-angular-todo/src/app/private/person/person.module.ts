import { NgModule } from '@angular/core';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonService } from './person.service';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  { path: 'new', component: PersonFormComponent },
  { path: ':id', component: PersonFormComponent },
];

@NgModule({
  declarations: [PersonFormComponent, PersonListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [PersonService]
})
export class PersonModule {}
