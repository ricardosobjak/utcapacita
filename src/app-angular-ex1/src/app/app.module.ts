import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormCadastro } from './form-cadastro/form-cadastro.component';
import { MeuPrimeiro } from './meu-primeiro/meu-primeiro.component';

@NgModule({
  declarations: [
    AppComponent, MeuPrimeiro, FormCadastro
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
