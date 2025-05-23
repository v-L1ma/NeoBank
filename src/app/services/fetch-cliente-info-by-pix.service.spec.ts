import { TestBed } from '@angular/core/testing';

import { FetchClienteInfoByPixService } from './fetch-cliente-info-by-pix.service';

describe('FetchClienteInfoService', () => {
  let service: FetchClienteInfoByPixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchClienteInfoByPixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
