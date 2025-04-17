import FailureEntity from '../domain/entities/failureEntity';

export function containsAfailedResult<T>(
  result: (T | FailureEntity)[],
): boolean {
  result.map((value, index) => {
    if (value instanceof FailureEntity) {
      return true;
    }
  });
  return false;
}
