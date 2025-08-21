import { TestBed } from '@angular/core/testing';

import { FetchChavesPixService } from './fetch-chaves-pix.service';

describe('FetchChavesPixService', () => {
  let service: FetchChavesPixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchChavesPixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
