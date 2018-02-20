export interface CheckerInterface {
  setNextChecker(checker: CheckerInterface): CheckerInterface;
  check(source: number): boolean;
}
