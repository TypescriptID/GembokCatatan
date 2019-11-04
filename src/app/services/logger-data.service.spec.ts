import { TestBed } from '@angular/core/testing';

import { LoggerDataService } from './logger-data.service';

describe('LoggerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerDataService = TestBed.get(LoggerDataService);
    expect(service).toBeTruthy();
  });
});
