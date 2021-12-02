import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { Task, TaskPriority } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List App';
  public todos: Task[] = [];  
  
  taskList: Task[] = [];

  constructor() { } 

}

