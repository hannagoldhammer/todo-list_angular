import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatatodoComponent } from './datatodo/datatodo.component';
import { PrintTodoComponent } from './print-todo/print-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatodoComponent,
    PrintTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
