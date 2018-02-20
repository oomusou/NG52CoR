import { Injectable } from '@angular/core';

@Injectable()
export class ProductNoChecker {
  check(productNo: number): boolean {
    let result = false;

    if (Number.isInteger(productNo)) {
      if ((productNo % 2) === 0) {
        if ((productNo % 3) === 0) {
          result = true;
        }
      }
    }

    return result;
  }
}
