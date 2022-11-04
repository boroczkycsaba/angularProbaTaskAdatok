import { TestBed } from '@angular/core/testing';

import { TaskRouteCanActiveGuard } from './task-route-can-active.guard';

describe('TaskRouteCanActiveGuard', () => {
  let guard: TaskRouteCanActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TaskRouteCanActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
