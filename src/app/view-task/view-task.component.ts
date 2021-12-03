import { TodoListService } from './../services/todo-list.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


let url = 'http://localhost:3000/tasks';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  taskForm?: FormGroup;
  id?: number;
  isViewing: boolean = false;
  path?: string = '';
  task?: any;
  title?: string;
  sub?: Subscription;

  constructor(private todoListService: TodoListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.url[0].path;
    this.isViewing = true;
      this.id = this.route.snapshot.params['id'];
      this.todoListService.getTaskById(this.id!).subscribe({
        next: (data) => this.task = data,
        complete: () => {        
        }
      });
  }  
}