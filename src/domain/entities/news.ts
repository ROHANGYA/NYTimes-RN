import {DateTime} from 'luxon';

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: DateTime;
  imageUrl: string;
}
