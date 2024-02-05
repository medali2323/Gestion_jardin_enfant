import { TestBed, async, inject } from '@angular/core/testing';

import { AuthgardDGuard } from './authgard-d.guard';

describe('AuthgardDGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthgardDGuard]
    });
  });

  it('should ...', inject([AuthgardDGuard], (guard: AuthgardDGuard) => {
    expect(guard).toBeTruthy();
  }));
});
