import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenzorComponent } from './cenzor/cenzor.component';
import { UsersTaskComponent } from './users-task/users-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ChildComponent } from './task-list/child/child.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { SearchPipe } from './phone-book/search.pipe';
import { SortFirstPipe } from './phone-book/sort-first.pipe';
import { SortLastPipe } from './phone-book/sort-last.pipe';
import { SortPhonePipe } from './phone-book/sort-phone.pipe';




@NgModule({
  declarations: [
    AppComponent,
    CenzorComponent,
    UsersTaskComponent,
    TaskListComponent,
    ChildComponent,
    PhoneBookComponent,
    SearchPipe,
    SortFirstPipe,
    SortLastPipe,
    SortPhonePipe,

   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }