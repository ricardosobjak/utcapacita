import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  {
    path: 'person',
    loadChildren: () =>
      import('./person/person.module').then((m) => m.PersonModule),
  },
];

@NgModule({
  declarations: [
    IndexComponent,
    TodoComponent,
    TodoDialogComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PrivateModule { }
