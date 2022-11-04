import {Injectable} from '@angular/core';
import {DataStoreServiceService} from "./data-store-service.service";
import {UserModel} from "./user-model";

@Injectable()
export class UserManageService {

  private userKey: string = 'userDataKey';

  constructor(private dataStoreServiceService: DataStoreServiceService) {
  }

  loadLoggedInUser(): UserModel {
    const userLoaded = this.dataStoreServiceService.loadData(this.userKey);
    console.debug('Beolvasott user adat', userLoaded);
    if (userLoaded && userLoaded.loginName) {
      return userLoaded;
    }
    return new UserModel();
  }

  isUserLoggedIn(): boolean {
    const user = this.loadLoggedInUser();
    return user && user.loginName != '';
  }

  storeUserData(loginName: string): void {
    let userData = new UserModel();
    userData.loginName = loginName;
    const userLoaded = this.dataStoreServiceService.loadData(this.userKey);
    if (userLoaded && userLoaded.loginName) {
      console.warn('Felülírjuk a létező adatot', userLoaded);
    }
    this.dataStoreServiceService.storeData(this.userKey, userData);
  }

  removeUserData(): void {
    this.dataStoreServiceService.removeData(this.userKey);
  }
}
