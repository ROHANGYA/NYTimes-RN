export type FailureEntityType = {
  errorDescription?: string;
  underlyingException?: Error;
  statusCode?: number;
};

export default class FailureEntity {
  errorDescription?: string;
  underlyingException?: Error;
  statusCode?: number;

  constructor(failure: FailureEntityType) {
    this.errorDescription = failure.errorDescription;
    this.underlyingException = failure.underlyingException;
    this.statusCode = failure.statusCode;
  }
}
