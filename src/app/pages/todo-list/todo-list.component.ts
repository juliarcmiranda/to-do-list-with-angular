import { Component, OnInit } from '@angular/core';

import { Task, TaskPriority } from './../../models/task.model'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  taskList: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.taskList = [
      {
        title: "Assistir a aula do curso Santander Coders",
        description: "Devo reassistir a última aula de Angular para revisar o conteúdo.",
        dueDate: new Date(),
        priority: TaskPriority.Low,
        labels: [],
      },
      {
        title: "Fazer a Atividade 05 da Forca 2.0",
        description: "Devo reunir com meu grupo, implementar e testar o trabalho.",
        dueDate: new Date(),
        priority: TaskPriority.High,
        labels: [],
      }
    ]

  }

}
