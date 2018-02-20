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
    return this.checkers.every(checker => checker(productNo));
  }
}
