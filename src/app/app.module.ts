import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenzorComponent } from './task5/pages/works/cenzor/cenzor.component';
import { UsersTaskComponent } from './task5/pages/works/users-task/users-task.component';
import { TaskListComponent } from './task5/pages/works/task-list/task-list.component';
import { ChildComponent } from './task5/pages/works/task-list/child/child.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { SearchPipe } from './phone-book/search.pipe';
import { SortFirstPipe } from './phone-book/sort-first.pipe';
import { SortLastPipe } from './phone-book/sort-last.pipe';
import { SortPhonePipe } from './phone-book/sort-phone.pipe';

import { Task5Component } from './task5/task5.component';
import { FooterComponent } from './task5/components/footer/footer.component';
import { HeaderComponent } from './task5/components/header/header.component';
import { HomeComponent } from './task5/pages/home/home.component';
import { WorksComponent } from './task5/pages/works/works.component';
import { BlogComponent } from './task6/blog/blog.component';







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
 
    Task5Component,
      FooterComponent,
      HeaderComponent,
      HomeComponent,
      WorksComponent,
      BlogComponent,
      
     
   

   
   
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