import { TestBed } from '@angular/core/testing';

import { UsersDataService } from './users-data.service';

describe('UsersDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersDataService = TestBed.get(UsersDataService);
    expect(service).toBeTruthy();
  });
});
