import { TestBed } from '@angular/core/testing';

import { BusDeatailsService } from './bus-deatails.service';

describe('BusDeatailsService', () => {
  let service: BusDeatailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusDeatailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
