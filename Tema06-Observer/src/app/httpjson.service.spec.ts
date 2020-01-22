import { TestBed } from '@angular/core/testing';

import { HttpjsonService } from './httpjson.service';

describe('HttpjsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpjsonService = TestBed.get(HttpjsonService);
    expect(service).toBeTruthy();
  });
});
