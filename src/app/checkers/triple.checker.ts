import { AbstractChecker } from './abstract.checker';

export class TripleChecker extends AbstractChecker {
  check(source: number): boolean {
    if (source % 3) {
      return false;
    }

    if (!this.nextChecker) {
      return true;
    }

    return this.nextChecker.check(source);
  }
}
