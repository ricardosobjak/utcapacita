import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivateComponent } from './private/private/private.component';
import { PUBLIC_ROUTES } from './public/public.module';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: '', children: PUBLIC_ROUTES },
  {
    path: 'app',
    component: PrivateComponent ,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
  },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
