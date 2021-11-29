import { Task, TaskPriority } from './models/task.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root', // se transforma em uma tag html <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // é um array que define todos os arquivos de estilo do app
})
export class AppComponent {
  public todos: Task[] = [];   // Esses colchetes indicam que é uma lista, independente do tipo de arquivo, se não setasse [] ficaria como undefined.
  public title: String = 'to do list';
  public form: FormGroup;

  taskList: Task[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([  // Só precisa do compose se tiver mais de um Validator
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    //this.load();
  }
  
  add () {
    const title = this.form.controls['title'].value;
    const id = this.todos.length +1;
   //this.todos.push(new Task(title, description,  false));
    this.save();
    this.clear();
  }

  clear () {
    this.form.reset();
  }

  remove(todo: Task) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  /*
  markAsDone(todo: Task) {
    todo.done = true;
  }
  markAsUndone(todo: Task) {
    todo.done = false;
  }
*/
  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }
/*
  load() {
    const data = localStorage.getItem('todos');
    this.todos = JSON.parse(data);
  }
*/
}
