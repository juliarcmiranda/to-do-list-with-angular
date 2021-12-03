import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { TodoListService } from './../../services/todo-list.service';
import { Task, TaskPriority } from './../../models/task.model';

let url = 'http://localhost:3000/tasks';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  taskForm?: FormGroup;
  id?: number;
  isUpdating: boolean = false;
  path?: string = '';
  task?: any;
  title?: string;
  sub?: Subscription;

  constructor(private todoListService: TodoListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.url[0].path;

    this.isUpdating = true;
      this.id = this.route.snapshot.params['id'];
      this.todoListService.getTaskById(this.id!).subscribe({
        next: (data) => this.task = data,
        complete: () => {
          this.taskForm = new FormGroup({
            'title': new FormControl(this.task.title),
            'description': new FormControl(this.task.description),
            'priority': new FormControl(this.task.priority)
          })
        }
      });
      
      this.sub?.unsubscribe;
  }

  onSubmit() {
    this.task.title = this.taskForm?.value.title;
    this.task.description = this.taskForm?.value.description;
    this.task.priority = this.taskForm?.value.priority;
    console.log(this.task);
    this.todoListService.updateTask(this.task).subscribe({});
    this.router.navigate(['home']);
  }
}
