export type FailureEntityType = {
  errorDescription?: string;
  underlyingException?: string;
};

export default class FailureEntity {
  errorDescription?: string;
  underlyingException?: string;

  constructor(failure: FailureEntityType) {
    this.errorDescription = failure.errorDescription;
    this.underlyingException = failure.underlyingException;
  }
}
