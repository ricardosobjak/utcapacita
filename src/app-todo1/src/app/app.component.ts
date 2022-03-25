import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'app-todo1';

  nome: string = 'Ana Maria Braga';

  texto = '';

  isMouseOver = false;

  public onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }


  public save(valor: string) {
    this.texto = valor;
  }

  public digitando = (event: KeyboardEvent) => {
    console.log(event);
    this.texto = (<HTMLInputElement>event.target).value;
  };
}
