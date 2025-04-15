import {AxiosError} from 'axios';
import FailureEntity from '../domain/entities/failureEntity';
import {useLocalization} from '../lang/lang';

export function repositoryExceptionHandler(error: any): FailureEntity {
  if (error instanceof AxiosError) {
    return new FailureEntity({
      underlyingException: error.cause,
      statusCode: error.response?.status,
    });
  }
  return new FailureEntity({});
}

export function getDisplayMessage(error: FailureEntity): string {
  const strings = useLocalization();
  switch (error.statusCode) {
    case 401:
      return strings.youAreNotAuthorisedToAccessThisPage;
    case 429:
      return strings.weDetectedTooManyRequests;
    case 500:
      return strings.serviceCurrentlyUnavilable;
  }
  return strings.anErrorHasOccurredPleaseTryAgain;
}
