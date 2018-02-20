import { Injectable } from '@angular/core';

@Injectable()
export class ProductNoChecker {
  check(productNo: number): boolean {
    let result: boolean;

    if (Number.isInteger(productNo)) {
      if ((productNo % 2) === 0) {
        if ((productNo % 3) === 0) {
          result = true;
        } else {
          result = false;
        }
      } else {
        result = false;
      }
    } else {
      result = false;
    }

    return result;
  }
}
