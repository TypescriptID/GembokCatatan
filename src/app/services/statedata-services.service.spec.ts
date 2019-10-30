import { TestBed } from '@angular/core/testing';

import { StatedataServicesService } from './statedata-services.service';

describe('StatedataServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatedataServicesService = TestBed.get(StatedataServicesService);
    expect(service).toBeTruthy();
  });
});
