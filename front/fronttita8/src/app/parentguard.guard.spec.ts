import { TestBed, async, inject } from '@angular/core/testing';

import { ParentguardGuard } from './parentguard.guard';

describe('ParentguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentguardGuard]
    });
  });

  it('should ...', inject([ParentguardGuard], (guard: ParentguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
