import { AbstractChecker } from './abstract.checker';

export class DoubleChecker extends AbstractChecker {
  check(source: number): boolean {
    if (source % 2) {
      return false;
    }

    if (!this.nextChecker) {
      return true;
    }

    return this.nextChecker.check(source);
  }
}
