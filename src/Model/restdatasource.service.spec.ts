import { TestBed } from '@angular/core/testing';

import { RestdatasourceService } from './restdatasource.service';

describe('RestdatasourceService', () => {
  let service: RestdatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestdatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
