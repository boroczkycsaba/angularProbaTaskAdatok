import {Component, OnInit} from '@angular/core';
import {TaskModel} from "../task-model";
import {TaskManageService} from "./task-manage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {
  elNemKeszultTaskok: Array<TaskModel> = [];
  elKeszultTaskok: Array<TaskModel> = [];

  constructor(private taskManageService: TaskManageService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.initDate();
  }

  private initDate() {
    this.elNemKeszultTaskok = this.taskManageService.elNemKeszultTaskokBetoltese();
    this.elKeszultTaskok = this.taskManageService.elKeszultTaskokBetoltese();
  }

  taskElkeszult(task: TaskModel) {
    this.taskManageService.taskElkeszult(task);
    this.initDate();
  }

  ujTaskOldalraNavigalas() {
    this.router.navigate(['/task/create']);
  }
}
