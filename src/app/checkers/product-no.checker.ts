import { Injectable } from '@angular/core';
import { IntegerChecker } from './integer.checker';
import { CheckerInterface } from './checker.interface';
import { DoubleChecker } from './double.checker';
import { TripleChecker } from './triple.checker';

@Injectable()
export class ProductNoChecker {
  check(productNo: number): boolean {
    const checker: CheckerInterface = new IntegerChecker();

    checker
      .setNextChecker(new DoubleChecker())
      .setNextChecker(new TripleChecker());

    return checker.check(productNo);
  }
}
