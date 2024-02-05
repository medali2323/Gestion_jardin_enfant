import { TestBed } from '@angular/core/testing';

import { DirecteurService } from './directeur.service';

describe('DirecteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirecteurService = TestBed.get(DirecteurService);
    expect(service).toBeTruthy();
  });
});
