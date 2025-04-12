export interface NewsResponseModel<T> {
  status: string;
  copyright: string;
  num_results: number;
  results: T;
  response: T;
}
