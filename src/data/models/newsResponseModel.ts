import {NewsModel} from './newsModel';

export interface NewsResponseModel {
  status: string;
  copyright: string;
  num_results: number;
  results: NewsModel[];
}
