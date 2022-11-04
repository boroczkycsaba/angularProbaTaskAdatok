import { Pipe, PipeTransform } from '@angular/core';
import {TaskModel} from "../task-model";

@Pipe({
  name: 'taskAdatMegjelenites'
})
export class TaskAdatMegjelenitesPipe implements PipeTransform {

  transform(task: TaskModel, ...args: unknown[]): unknown {
    console.log("Task kész-e", task.isReady);
    return task.fullName + ' - ' + task.description + ' - ' + task.loginName;
  }
}
