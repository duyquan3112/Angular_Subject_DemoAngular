import { TestBed } from '@angular/core/testing';

import { CpusService } from './cpus.service';

describe('VgasService', () => {
  let service: CpusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
