import { TestBed } from '@angular/core/testing';

import { StorefirstGuard } from './storefirst.guard';

describe('StorefirstGuard', () => {
  let guard: StorefirstGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StorefirstGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
