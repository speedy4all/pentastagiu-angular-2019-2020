import { TestBed } from '@angular/core/testing';

import { UserphotosService } from './userphotos.service';

describe('UserphotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserphotosService = TestBed.get(UserphotosService);
    expect(service).toBeTruthy();
  });
});
