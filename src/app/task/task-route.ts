import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskListsComponent} from "./task-lists/task-lists.component";
import {TaskCreateComponent} from "./task-create/task-create.component";
import {TaskRouteCanActiveGuard} from "./task-route-can-active.guard";

const routes: Routes = [
  {
    path: 'list',
    component: TaskListsComponent,
    pathMatch: 'full',
    canActivate: [TaskRouteCanActiveGuard]
  },
  {
    path: 'create',
    component: TaskCreateComponent,
    pathMatch: 'full',
    canActivate: [TaskRouteCanActiveGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoute {
}
