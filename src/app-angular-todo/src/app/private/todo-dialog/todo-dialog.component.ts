import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Modal } from 'bootstrap';
import { ToDo } from '../todo/todo.model';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {
  form?: FormGroup;
  modal!: Modal;
  todo?: ToDo;

  @Output('confirm')
  confirmEmitter = new EventEmitter<ToDo>();

  @Output('delete')
  deleteEmitter = new EventEmitter<ToDo>();

  constructor(private formBuilder: FormBuilder) {
    this.reset();
  }

  ngOnInit(): void {
    this.modal = Modal.getOrCreateInstance(document.getElementById('todoDialog') as HTMLElement);
  }

  reset() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(''),
      title: this.formBuilder.control(''),
      description: this.formBuilder.control(''),
      date: this.formBuilder.control(''),
      done: this.formBuilder.control('')
    });
  }

  setDados(todo: ToDo) {
    const f = this.form.controls;
    f['id'].setValue(todo.id);
    f['title'].setValue(todo.title);
    f['description'].setValue(todo.description);
    f['date'].setValue(todo.date);
    f['done'].setValue(todo.done);
  }

  /**
   * Abrir o Dialog do Bootstrap
   */
  open(todo?: ToDo) {
    this.todo = todo;
    if (todo) this.setDados(todo);
    else this.reset();

    this.modal.show();
  }

  /**
   * Fechar o Dialog do Bootstrap
   */
  close() {
    this.reset();
    this.modal.hide();
  }

  /**
   * Ação de confirmação do dialog
   */
  confirm() {
    let todo = new ToDo();

    todo.id = this.todo!.id;
    todo.title = this.form.value['title'];
    todo.description = this.form.value['description'];
    todo.date = this.form.value['date'];
    todo.done = this.form.value['done'] == true; // Deixar a validação forçada (== true)

    this.confirmEmitter.emit(todo);
  }
}
