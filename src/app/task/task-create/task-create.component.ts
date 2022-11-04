import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskCreateService} from "./task-create.service";
import {TaskModel} from "../task-model";
import {UserManageService} from "../../user-manage.service";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  @Input() task: TaskModel = new TaskModel();
  errorMessage: string = "";

  constructor(private userManageService: UserManageService, private taskCreateService: TaskCreateService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const user = this.userManageService.loadLoggedInUser();
    if (user && user.loginName) {
      this.task.loginName = user.loginName;
    }
  }

  storeTaskData() {
    this.errorMessage = '';
    if (this.task.fullName === '') {
      this.errorMessage = 'Kérem töltse ki a feladat nevét! ';
    }
    if (this.task.fullName === '') {
      this.errorMessage += 'Kérem töltse ki a feladat leírását!';
    }

    if (this.errorMessage === '') {
      if (this.taskCreateService.storeTaskData(this.task)) {
        this.router.navigate(['/task/list']);
      } else {
        this.errorMessage = 'Hiba! Már létezik ilyen nevű feladat';
      }
    }
  }
}
