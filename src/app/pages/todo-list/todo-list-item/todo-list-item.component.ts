import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { TodoListService } from './../../../services/todo-list.service';
import { Task, TaskPriority } from './../../../models/task.model';

@Component({
  selector: 'pages-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})

export class TodoListItemComponent implements OnInit {

  @Input('taskObj') task?: Task;
  @Input() taskId?: number;

  tasksList: Task[] = [];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void { }

  getClass(): string {
    switch (this.task?.priority) {
      case "Low":
        return 'bg-yellow';
      case "Medium":
        return 'bg-orange';
      case "High":
        return 'bg-red';
      default:
        return 'white';

    }
  }

  callDelete(id: number) {
    this.todoListService.deleteTask(id).subscribe();
    window.location.reload();
  }

  markAsDone($event: MatCheckboxChange) {
    this.task!.done = $event.checked;
    this.todoListService.updateTask(this.task!).subscribe({});
    }
  }

