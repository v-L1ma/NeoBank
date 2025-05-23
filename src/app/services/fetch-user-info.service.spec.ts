import { TestBed } from '@angular/core/testing';

import { FetchUserInfoService } from './fetch-user-info.service';

describe('FetchUserInfoService', () => {
  let service: FetchUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
