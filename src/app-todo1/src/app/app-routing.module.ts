import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PUBLIC_ROUTES } from './public/public.module';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '', children: PUBLIC_ROUTES },
  { 
    path: 'app', 
    loadChildren: () => 
      import('./private/private.module').then((m) => m.PrivateModule), 
  },
  { path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
