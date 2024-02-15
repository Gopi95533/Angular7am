import { TestBed } from '@angular/core/testing';

import { FakeproductsService } from './fakeproducts.service';

describe('FakeproductsService', () => {
  let service: FakeproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
