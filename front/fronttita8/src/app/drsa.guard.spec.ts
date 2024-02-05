import { TestBed, async, inject } from '@angular/core/testing';

import { DrsaGuard } from './drsa.guard';

describe('DrsaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrsaGuard]
    });
  });

  it('should ...', inject([DrsaGuard], (guard: DrsaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
