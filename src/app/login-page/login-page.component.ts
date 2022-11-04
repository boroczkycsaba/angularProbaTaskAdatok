import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserManageService} from "../user-manage.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {

  @Input() loginName : string | undefined;
  errorMessage: string = "";

  constructor(private userManageService: UserManageService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const user = this.userManageService.loadLoggedInUser();
    this.loginName = user.loginName;
  }

  loginCheckAngRoute() {
    this.errorMessage = '';
    if (this.loginName == undefined || this.loginName === '') {
      this.errorMessage = 'Kérem töltse ki a bejelentkezési nevet!';
    } else {
      this.userManageService.storeUserData(this.loginName);
      this.router.navigate(['/task/list']);
    }
  }

  ngAfterViewInit(): void {
    if (this.loginName) {
      this.loginCheckAngRoute();
    }
  }
}
