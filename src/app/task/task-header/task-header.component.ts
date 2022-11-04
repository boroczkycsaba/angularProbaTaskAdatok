import { Component, OnInit } from '@angular/core';
import {UserManageService} from "../../user-manage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  loginName: string | undefined;

  constructor(private userManageService: UserManageService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const user = this.userManageService.loadLoggedInUser();
    if (user && user.loginName) {
      this.loginName = user.loginName;
    } else {
      this.loginName = "Nincs bejelentkezett felhasználó";
    }
  }

  logout() {
    this.userManageService.removeUserData();
    this.router.navigate(['/login']);
  }
}
