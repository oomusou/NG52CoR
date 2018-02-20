import { TestBed } from '@angular/core/testing';
import { ProductNoChecker } from './product-no.checker';

describe('ProductNoService', () => {
  let productNoChecker: ProductNoChecker;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductNoChecker]
    });

    productNoChecker = TestBed.get(ProductNoChecker);
  });

  it('should be created', () => {
    expect(productNoChecker).toBeTruthy();
  });

  it('當ProductNo為整數，且為2與3的倍數，應回傳 true', () => {
    const productNo = 6;
    expect(productNoChecker.check(productNo)).toBeTruthy();
  });

  it('當ProductNo為整數，為2的倍數但不是3的倍數，應回傳 false', () => {
    const productNo = 2;
    expect(productNoChecker.check(productNo)).toBeFalsy();
  });

  it('當ProductNo為整數，但不是2的倍數，應回傳 false', () => {
    const productNo = 1;
    expect(productNoChecker.check(productNo)).toBeFalsy();
  });

  it('當ProductNo不是整數，應回傳 false', () => {
    const productNo = parseInt('t1', 10);
    expect(productNoChecker.check(productNo)).toBeFalsy();
  });
});
