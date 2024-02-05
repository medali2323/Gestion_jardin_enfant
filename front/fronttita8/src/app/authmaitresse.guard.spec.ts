import { TestBed, async, inject } from '@angular/core/testing';

import { AuthmaitresseGuard } from './authmaitresse.guard';

describe('AuthmaitresseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthmaitresseGuard]
    });
  });

  it('should ...', inject([AuthmaitresseGuard], (guard: AuthmaitresseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
