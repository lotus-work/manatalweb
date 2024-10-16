import { TestBed } from '@angular/core/testing';

import { CandiateService } from './candiate.service';

describe('CandiateService', () => {
  let service: CandiateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandiateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
