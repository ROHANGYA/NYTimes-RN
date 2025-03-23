import {NewsItem} from '../../domain/entities/news';
import {NewsRepository} from '../../domain/repository/newsRepository';
import NewsApi from '../dataSources/remote/newsApi';
import {mapToDomain} from '../mappers/newsMapper';

class NewsRepositoryImpl implements NewsRepository {
  constructor(private api: NewsApi) {}

  async getMostViewedNews(): Promise<NewsItem[]> {
    try {
      const result = await this.api.fetchMostViewedNews();
      return result.map(newsModel => mapToDomain(newsModel));
    } catch (err) {
      throw err;
    }
  }
  getNewsById(id: string): Promise<NewsItem> {
    throw new Error('Method not implemented.');
  }
}

export default NewsRepositoryImpl;
