import {AxiosError} from 'axios';

export default class FailureEntity {
  errorDescription?: string;
  underlyingException?: AxiosError;

  constructor(error?: string, exception?: AxiosError) {
    this.errorDescription = error;
    this.underlyingException = exception;
  }
}
