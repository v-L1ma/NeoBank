import { TestBed } from '@angular/core/testing';

import { FetchbypixService } from './fetchbypix.service';

describe('FetchbypixService', () => {
  let service: FetchbypixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchbypixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
