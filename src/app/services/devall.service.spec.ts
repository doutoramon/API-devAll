import { TestBed } from '@angular/core/testing';

import { DevallService } from './devall.service';

describe('DevallService', () => {
  let service: DevallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
