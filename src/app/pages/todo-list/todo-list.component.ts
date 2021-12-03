import { MatCheckboxChange } from '@angular/material/checkbox';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TodoListService } from './../../services/todo-list.service';
import { Task } from './../../models/task.model'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoListService]
})
export class TodoListComponent implements OnInit {

  tasksList$?: Observable<Task[]>;
  sub?: Subscription;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.tasksList$ = this.todoListService.getTasks();

    this.tasksList$?.subscribe({
      next: () => console.log("Acessei o dado!"),
      error: (error) => console.log(error),
      complete: () => console.log("Acesso finalizado!")
    }, );

    /* this.sub = this.todoListService.getTasks().subscribe((tasksList: Task[]) => {
      this.tasksList = tasksList;
    }); */
    
/*     setTimeout(() => sub.unsubscribe(), 2100); */
  }
  ngOnDestroy() {
    /* this.sub?.unsubscribe(); */
  }
}