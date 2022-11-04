import { Injectable } from '@angular/core';
import {DataStoreServiceService} from "../../data-store-service.service";
import {TaskModel} from "../task-model";

@Injectable()
export class TaskCreateService {

  private taskKey : string = 'taskDataKey';

  constructor(private dataStoreServiceService : DataStoreServiceService) { }

  storeTaskData(task: TaskModel) : boolean {
    const taskDataLoaded = this.dataStoreServiceService.loadData(this.taskKey);
    if (taskDataLoaded) {
      const index = taskDataLoaded.findIndex((taskSearch: TaskModel) => {
        return taskSearch.fullName === task.fullName;
      });
      if (index !== -1) {
        return false;
      } else {
        taskDataLoaded.push(task);
        this.dataStoreServiceService.storeData(this.taskKey, taskDataLoaded);
      }
    } else {
      let newtaskDataArray : Array<TaskModel> = [];
      newtaskDataArray.push(task);
      this.dataStoreServiceService.storeData(this.taskKey, newtaskDataArray);
    }
    return true;
  }
}
