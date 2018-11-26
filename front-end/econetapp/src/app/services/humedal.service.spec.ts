import { TestBed } from '@angular/core/testing';

import { HumedalService } from './humedal.service';

describe('HumedalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HumedalService = TestBed.get(HumedalService);
    expect(service).toBeTruthy();
  });
});
