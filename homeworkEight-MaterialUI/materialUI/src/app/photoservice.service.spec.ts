import { TestBed } from '@angular/core/testing';

import { PhotoserviceService } from './photoservice.service';

describe('PhotoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoserviceService = TestBed.get(PhotoserviceService);
    expect(service).toBeTruthy();
  });
});
