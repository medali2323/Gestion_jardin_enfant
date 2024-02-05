import { TestBed } from '@angular/core/testing';

import { ChangepassService } from './changepass.service';

describe('ChangepassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangepassService = TestBed.get(ChangepassService);
    expect(service).toBeTruthy();
  });
});
