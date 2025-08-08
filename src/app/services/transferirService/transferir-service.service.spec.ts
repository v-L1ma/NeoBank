import { TestBed } from '@angular/core/testing';

import { TransferirServiceService } from './transferir-service.service';

describe('TransferirServiceService', () => {
  let service: TransferirServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferirServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
