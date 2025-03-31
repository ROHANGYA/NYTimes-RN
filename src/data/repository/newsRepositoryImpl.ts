import {AxiosError} from 'axios';
import FailureEntity from '../../domain/entities/failureEntity';
import {NewsItem} from '../../domain/entities/news';
import {NewsRepository} from '../../domain/repository/newsRepository';
import NewsApi from '../dataSources/remote/newsApi';
import {mapToDomain} from '../mappers/newsMapper';

class NewsRepositoryImpl implements NewsRepository {
  constructor(private api: NewsApi) {}

  async getMostViewedNews(): Promise<NewsItem[] | FailureEntity> {
    try {
      const result = await this.api.fetchMostViewedNews();
      return result.map(newsModel => mapToDomain(newsModel));
    } catch (err) {
      if (err instanceof AxiosError) {
        return new FailureEntity({underlyingException: err.code});
      }
      return new FailureEntity({});
    }
  }

  async getTopStoriesByCatgory(
    category: NewsCategories,
  ): Promise<NewsItem[] | FailureEntity> {
    try {
      const result = await this.api.fetchTopStoriesNews(category.toString());
      return result.map(newsModel => mapToDomain(newsModel));
    } catch (err) {
      if (err instanceof AxiosError) {
        return new FailureEntity({underlyingException: err.code});
      }
      return new FailureEntity({});
    }
  }
}

export default NewsRepositoryImpl;
