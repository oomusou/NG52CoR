import { CheckerInterface } from './checker.interface';

export abstract class AbstractChecker implements CheckerInterface {
  protected nextChecker: CheckerInterface;

  setNextChecker(checker: CheckerInterface): CheckerInterface {
    return this.nextChecker = checker;
  }

  abstract check(source: number): boolean;
}
