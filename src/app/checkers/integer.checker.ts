import { AbstractChecker } from './abstract.checker';

export class IntegerChecker extends AbstractChecker {
  check(source: number): boolean {
    return !Number.isInteger(source) ? false :
           !this.nextChecker ? true :
           this.nextChecker.check(source);
  }
}
