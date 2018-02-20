import { Injectable } from '@angular/core';

@Injectable()
export class ProductNoChecker {
  check(productNo: number): boolean {
    if (!Number.isInteger(productNo)) {
      return false;
    }

    if (productNo % 2) {
      return false;
    }

    if (productNo % 3) {
      return false;
    }

    return true;
  }
}
