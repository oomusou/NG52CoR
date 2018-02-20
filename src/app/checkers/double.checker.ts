import { AbstractChecker } from './abstract.checker';

export class DoubleChecker extends AbstractChecker {
  check(source: number): boolean {
    return source % 2 ? false :
           !this.nextChecker ? true :
           this.nextChecker.check(source);
  }
}
