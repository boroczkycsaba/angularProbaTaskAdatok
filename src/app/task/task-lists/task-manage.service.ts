import {Injectable} from '@angular/core';
import {TaskModel} from "../task-model";
import {DataStoreServiceService} from "../../data-store-service.service";
import {UserManageService} from "../../user-manage.service";

@Injectable()
export class TaskManageService {

  private taskKey: string = 'taskDataKey';

  constructor(private dataStoreServiceService: DataStoreServiceService, private userManageService: UserManageService) {
  }

  elNemKeszultTaskokBetoltese(): Array<TaskModel> {
    let elmentettTaskAdatok = this.taskAdatokBetoltese();
    return elmentettTaskAdatok.filter((task: TaskModel) => {
      return !task.isReady
    });
  }

  elKeszultTaskokBetoltese() {
    let elmentettTaskAdatok = this.taskAdatokBetoltese();
    return elmentettTaskAdatok.filter((task: TaskModel) => {
      return task.isReady
    });
  }

  taskElkeszult(task: TaskModel): void {
    task.isReady = true;
    this.taskDataReplace(task);
  }

  taskDataReplace(task: TaskModel): void {
    const taskDataLoaded = this.taskAdatokBetoltese();
    if (taskDataLoaded && taskDataLoaded.length > 0) {
      const index = taskDataLoaded.findIndex((taskSearch: TaskModel) => {
        return taskSearch.fullName === task.fullName;
      });
      if (index !== -1) {
        taskDataLoaded[index] = task;
      }
      this.dataStoreServiceService.storeData(this.taskKey, taskDataLoaded);
    }
  }

  private taskAdatokBetoltese() {
    const taskDataLoaded = this.dataStoreServiceService.loadData(this.taskKey);
    let taskDataFiltered: Array<TaskModel> = [];
    if (taskDataLoaded && taskDataLoaded.length > 0) {
      const user = this.userManageService.loadLoggedInUser()
      if (user && user.loginName) {
        taskDataFiltered = taskDataLoaded.filter((taskFilter: TaskModel) => {return taskFilter.loginName === user.loginName})
      } else {
        taskDataFiltered = taskDataLoaded;
      }
    }
    return taskDataFiltered;
  }
}
