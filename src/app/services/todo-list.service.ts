import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, of, Observable } from 'rxjs';

import { Task, TaskPriority } from './../models/task.model';

const URL = 'http://madsti.com.br:9099/swagger-ui.html';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {

  constructor(private http: HttpClient) {
    console.log("Serviço todo-list instanciado!")
  }

  getTasks() {
    /* const options = {
      headers: {
        Authorization: "Basic " + btoa("admin:password")
      }
    };
    return this.http.get<Task[]>(URL); */
    let obs = of([
      {
        id: '1',
        title: "Assistir a aula do curso Santander Coders",
        description: "Devo reassistir a última aula de Angular para revisar o conteúdo.",
        dueDate: new Date(),
        priority: TaskPriority.Low,
        labels: [],
        done: false,
      },
      {
        id: '2',
        title: "Fazer a Atividade 05 da Forca 2.0",
        description: "Devo reunir com meu grupo, implementar e testar o trabalho.",
        dueDate: new Date(),
        priority: TaskPriority.High,
        labels: [],
        done: false,
      }
    ]);
    
    return obs.pipe(delay(2000));
  }
  }
