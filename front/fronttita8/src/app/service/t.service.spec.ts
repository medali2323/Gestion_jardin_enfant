import { TestBed } from '@angular/core/testing';

import { TService } from './t.service';

describe('TService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TService = TestBed.get(TService);
    expect(service).toBeTruthy();
  });
});
