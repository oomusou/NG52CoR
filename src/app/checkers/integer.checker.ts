import { AbstractChecker } from './abstract.checker';

export class IntegerChecker extends AbstractChecker {
  check(source: number): boolean {
    if (!Number.isInteger(source)) {
      return false;
    }

    if (!this.nextChecker) {
      return true;
    }

    return this.nextChecker.check(source);
  }
}
