import { NgModule } from '@angular/core';
import { PrivateComponent } from './private/private.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TodoComponent } from './todo/todo.component';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: TodoComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  declarations: [PrivateComponent, TodoComponent, TodoDialogComponent],
  imports: [SharedModule, RouterModule.forChild(routes), NgbModule],
})
export class PrivateModule { }
