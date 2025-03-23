import {MediaModel} from './newsMediaModel';

export interface NewsModel {
  id: number;
  asset_id: number;
  source: string;
  published_date: Date;
  updated: Date;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  media: MediaModel[];
}
