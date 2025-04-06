import {MediaModel} from './newsMediaModel';

export interface NewsModelByCategory {
  section: string;
  title: string;
  abstract: string;
  published_date: string;
  multimedia: MediaModel[] | null;
}
