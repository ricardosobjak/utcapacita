import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'person',
    loadChildren: () =>
      import('./person/person.module').then((m) => m.PersonModule),
  },
];

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PrivateModule {}
