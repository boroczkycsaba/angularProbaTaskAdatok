import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserManageService} from "../user-manage.service";

@Injectable({
  providedIn: 'root'
})
export class TaskRouteCanActiveGuard implements CanActivate {
  constructor(private userManageService: UserManageService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userManageService.isUserLoggedIn();
  }

}
