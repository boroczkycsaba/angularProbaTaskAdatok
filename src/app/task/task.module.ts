import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskListsComponent} from "./task-lists/task-lists.component";
import { TaskCreateComponent } from './task-create/task-create.component';
import {TaskRoute} from "./task-route";
import { TaskHeaderComponent } from './task-header/task-header.component';
import {TaskCreateService} from "./task-create/task-create.service";
import {FormsModule} from "@angular/forms";
import {TaskManageService} from "./task-lists/task-manage.service";
import { TaskAdatMegjelenitesPipe } from './task-lists/task-adat-megjelenites.pipe';
import { TaskAdatSzinezesDirective } from './task-lists/task-adat-szinezes.directive';

@NgModule({
  declarations: [TaskListsComponent, TaskCreateComponent, TaskHeaderComponent, TaskAdatMegjelenitesPipe, TaskAdatSzinezesDirective],
  imports: [
    CommonModule,
    TaskRoute,
    FormsModule
  ],
  exports: [TaskHeaderComponent, TaskListsComponent, TaskCreateComponent],
  providers : [TaskManageService, TaskCreateService]
})
export class TaskModule { }
