import { Directive, ElementRef, Input} from '@angular/core';
import {TaskModel} from "../task-model";

@Directive({
  selector: '[appTaskAdatSzinezes]'
})
export class TaskAdatSzinezesDirective {

  constructor(private elementRef: ElementRef) { }

  @Input('appTaskAdatSzinezes')  set taskTomb(task: TaskModel) {
    if (task.isReady) {
      this.elementRef.nativeElement.classList.add('keszHatter');
    } else {
      this.elementRef.nativeElement.classList.add('nincsKeszHatter');
    }
  };

}
