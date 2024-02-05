import { TestBed } from '@angular/core/testing';

import { MaitresseService } from './maitresse.service';

describe('MaitresseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaitresseService = TestBed.get(MaitresseService);
    expect(service).toBeTruthy();
  });
});
