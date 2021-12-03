import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: TodoListComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'create-task', component: CreateTaskComponent, canActivate: [AuthGuard]},
  { path: 'home/update-task/:id', component: UpdateTaskComponent, canActivate: [AuthGuard]},
  { path: 'home/view-task/:id', component: ViewTaskComponent, canActivate: [AuthGuard]},
  { path:  '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
