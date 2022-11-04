export class TaskModel {
  fullName : string;
  description : string;
  isReady : boolean = false;
  loginName : string | undefined;

  constructor() {
    this.fullName = '';
    this.description = '';
  }

}
