import {AxiosError} from 'axios';

export default interface FailureEntity {
  errorDescription?: string;
  underlyingException?: AxiosError;
}
