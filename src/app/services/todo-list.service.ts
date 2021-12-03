import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';
import { Injectable } from '@angular/core';
import { delay, of, Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Task, TaskPriority } from './../models/task.model';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class TodoListService {

  taskList: Task[] = [];
  router: Router;
  constructor(private http: HttpClient, router: Router) {
    this.router = router;
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  addTask(task: Task): Observable<any> {
    this.router.navigate(['home']);
    return this.http.post('http://localhost:3000/tasks', task, httpOptions);
  }
  
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>('http://localhost:3000/tasks/'+id);
  }

  updateTask(task: Task): Observable<any> {
    let url = 'http://localhost:3000/tasks/' + task.id.toString();
    return this.http.put(url, task);
}

  deleteTask(id: number): Observable<any> {
    let url = 'http://localhost:3000/tasks/' + id.toString();
    return this.http.delete(url);
  }
  }
