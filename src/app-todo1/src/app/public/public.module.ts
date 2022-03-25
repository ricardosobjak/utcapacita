import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const PUBLIC_ROUTES: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
];
@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule
  ],
})
export class PublicModule {}
