import NewsCategories from '../entities/enums/newsCategories';
import FailureEntity from '../entities/failureEntity';
import {NewsItem} from '../entities/news';

export interface NewsRepository {
  getMostViewedNews(): Promise<NewsItem[] | FailureEntity>;
  getTopStoriesByCatgory(
    category: NewsCategories,
  ): Promise<NewsItem[] | FailureEntity>;
  getNewsFromSearch(
    searchQuery: string,
    pageNumber: number,
  ): Promise<NewsItem[] | FailureEntity>;
}
