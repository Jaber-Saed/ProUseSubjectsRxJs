import { TestBed } from '@angular/core/testing';

import { DataServicService } from './data-servic.service';

describe('DataServicService', () => {
  let service: DataServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
