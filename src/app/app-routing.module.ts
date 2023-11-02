import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './task5/pages/home/home.component';

import { WorksComponent } from './task5/pages/works/works.component';
import { CenzorComponent } from './task5/pages/works/cenzor/cenzor.component';
import { UsersTaskComponent } from './task5/pages/works/users-task/users-task.component';
import { TaskListComponent } from './task5/pages/works/task-list/task-list.component';
import { ChildComponent } from './task5/pages/works/task-list/child/child.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'works', component:  WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent },
    { path: 'userlist', component: UsersTaskComponent },
    { path: 'tasklist', component: TaskListComponent },]},
    { path: '', pathMatch: 'full', redirectTo: 'home' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
