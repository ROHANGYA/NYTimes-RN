import {MediaModel} from './newsMediaModel';

export interface NewsModelByCategory {
  section: string;
  title: string;
  abstract: string;
  published_date: Date;
  multimedia: MediaModel[] | null;
}
