import { TodoListService } from './../../services/todo-list.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Task, TaskPriority } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  
  taskForm?: FormGroup;

  onSubmit() {
    let task: Task = {
      id: Math.floor(Math.random()*134958),
      title: this.taskForm?.value.title,
      description: this.taskForm?.value.description,
      priority: this.taskForm?.value.priority,
      done: false
    };
    this.todoListService.addTask(task).subscribe({});
  }

  constructor(private todoListService: TodoListService) {
    this.taskForm = new FormGroup({
      'id': new FormControl(null),
      'title': new FormControl(null),
      'description': new FormControl(null),
      'priority': new FormControl(null),
      'done': new FormControl(null)
    });

  }

  ngOnInit(): void { }
}