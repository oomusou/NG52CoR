import { Injectable } from '@angular/core';
import { CheckerInterface } from './checker.interface';
import { integerCheck } from './integer.checker';
import { doubleCheck } from './double.checker';
import { tripleCheck } from './triple.checker';

@Injectable()
export class ProductNoChecker {
  checkers: CheckerInterface[];

  constructor() {
    this.checkers = [
      integerCheck,
      doubleCheck,
      tripleCheck
    ];
  }

  check(productNo: number): boolean {
    Array.prototype.any = function(fn) {
      return !this.some(item => !fn(item));
    };

    return this.checkers.any(checker => checker(productNo));
  }
}
