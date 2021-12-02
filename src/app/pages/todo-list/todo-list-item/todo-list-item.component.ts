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

  @Input('taskObj') task: Task = {
    id: '',
    title: '',
    description: '',
    dueDate: new Date,
    priority: TaskPriority.Low,
    labels: [],
    done: false
  }
  @Input() taskId?: number;
  @Output() warnTaskWasDone: EventEmitter<any> = new EventEmitter();
  @ViewChild('checkboxInput') checkboxInput?: ElementRef;

  tasksList: Task[] = [];

  constructor() { }

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

  markAsDone(event: MatCheckboxChange) {
    console.log(this.checkboxInput);
    this.warnTaskWasDone.emit({ id: this.taskId, value: event.checked });
  }
}
