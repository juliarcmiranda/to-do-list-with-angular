import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { TodoListComponent } from './pages/todo-list/todo-list.component';

import { AppComponent } from './app.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { CustomizedDirectivesComponent } from './customized-directives/customized-directives.component';

@NgModule({ 
  declarations: [
    AppComponent,
    ViewTaskComponent,
    CustomizedDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    PagesModule
  ],
  providers: [TodoListComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  
} 
