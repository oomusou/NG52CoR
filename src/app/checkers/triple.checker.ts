import { AbstractChecker } from './abstract.checker';

export class TripleChecker extends AbstractChecker {
  check(source: number): boolean {
    return source % 3 ? false  :
           !this.nextChecker ? true :
           this.nextChecker.check(source);
  }
}
