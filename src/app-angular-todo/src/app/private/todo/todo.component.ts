import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { catchError, throwError } from 'rxjs';
import { ToDoService } from '../todo/todo.service';
import { ToDo } from '../todo/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  todos: ToDo[] = [];

  @ViewChild(TodoDialogComponent) dialog?: TodoDialogComponent;

  constructor(private todoService: ToDoService) {
  }

  ngOnInit(): void {
    this.loadToDos();
  }


  public loadToDos() {
    this.todoService
      .getAll()
      .subscribe((res: ToDo[]) => {
        console.log(res);
        this.todos = res;
      });
  }

  diferencaDias(data: any, type = 'd') {
    const now = new Date();
    var diff = moment(data).diff(moment(now));

    if (type === 'h')
      return moment.duration(diff).asHours();

    return moment.duration(diff).asDays();
  }

  getStatus(data: any) {
    const horas = this.diferencaDias(data, 'h');

    if (horas < 0) return 'atrasado';
    else if (horas > 1) return 'distante';
    return 'proximo';
  }

  getDataText(data: any) {
    const dias = this.diferencaDias(data);

    const diasFormat = Math.round(dias);

    if (diasFormat == -1)
      return `Ontem`;
    else if (diasFormat == 1)
      return `Amanhã`;
    if (diasFormat < -1)
      return `${diasFormat * -1} dias em atraso`;
    else if (dias > 1)
      return `Daqui a ${diasFormat} dias`;
    else {
      const horas = this.diferencaDias(data, 'h');

      if (horas > 1)
        return `Daqui a ${Math.round(horas)} hora${Math.round(horas) > 1 ? 's' : ''}`;
      if (horas < -1)
        return `Atrasado em ${Math.round(horas) * -1} horas`;
      if (horas < 0)
        return `Atrasado`;
    }
    return "Nos próximos minutos";
  }

  openDialog(todo?: ToDo) {
    this.dialog?.open(todo);
  }

  onDeleteToDo(todo: ToDo) {
    this.todoService.delete(todo.id).pipe(catchError(err => {
      alert("Falha ao deletar o afazer!")
      console.error(err);
      return throwError(() => err);
    })).subscribe(() => {
      this.dialog?.close();
      this.todos.splice(this.todos.indexOf(todo), 1);
    });
  }

  saveToDo(todo: ToDo) {
    this.todoService.createOrUpdate(todo).pipe(catchError(err => {
      alert("Falha ao salvar o afazer!")
      console.error(err);
      return throwError(() => err);
    })).subscribe((res: ToDo) => {
      this.dialog?.close();
      console.log(res);

      let index = this.todos.findIndex(e => e.id === res.id);

      if (index < 0) this.todos.push(res);
      else this.todos[index] = res;
    });
  }
}
