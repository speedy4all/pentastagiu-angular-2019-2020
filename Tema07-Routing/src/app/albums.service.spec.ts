import { TestBed } from '@angular/core/testing';

import { AlbumsService } from './albums.service';

describe('AlbumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumsService = TestBed.get(AlbumsService);
    expect(service).toBeTruthy();
  });
});
