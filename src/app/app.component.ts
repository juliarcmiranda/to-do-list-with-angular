import { Task, TaskPriority } from './models/task.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Task[] = [];  
  public title: String = 'To-Do List';

  taskList: Task[] = [];

  constructor() {

  }
}
