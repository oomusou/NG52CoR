import { inject, TestBed } from '@angular/core/testing';
import { ProductNoChecker } from './product-no.checker';

describe('ProductNoCheckerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductNoChecker]
    });
  });

  it('should be created', inject([ProductNoChecker], (service: ProductNoChecker) => {
    expect(service).toBeTruthy();
  }));
});
