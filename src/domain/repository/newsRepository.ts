import {NewsItem} from '../entities/news';

export interface NewsRepository {
  getMostViewedNews(): Promise<NewsItem[]>;
  getNewsById(id: string): Promise<NewsItem>;
}
