import FailureEntity from '../../domain/entities/failureEntity';
import {NewsItem} from '../../domain/entities/news';
import {NewsRepository} from '../../domain/repository/newsRepository';
import NewsApi from '../dataSources/remote/newsApi';

import NewsCategories from '../../domain/entities/enums/newsCategories';
import {
  mapToNewsCategoryDomain,
  mapToNewsDomain,
  mapToNewsSearchDomain,
} from '../mappers/newsMapper';
import {repositoryExceptionHandler} from '../../utils/ExceptionUtils';
import NewsDao from '../dataSources/local/newsDao';
import {mapLocalToNewsDomain} from '../mappers/newsMapper_local';

class NewsRepositoryImpl implements NewsRepository {
  constructor(private api: NewsApi, private db: NewsDao) {}

  async getMostViewedNews(): Promise<NewsItem[] | FailureEntity> {
    try {
      const result = await this.api.fetchMostViewedNews();
      await this.db.insertMostViewedNews(result);
      return result.map(newsModel => mapToNewsDomain(newsModel));
    } catch (err) {
      return repositoryExceptionHandler(err);
    }
  }

  async getMostViewedNewsFromLocal(): Promise<NewsItem[] | FailureEntity> {
    try {
      const result = await this.db.fetchMostViewedNews();
      console.log(result);
      return mapLocalToNewsDomain(result);
    } catch (err) {
      return repositoryExceptionHandler(err);
    }
  }

  async getTopStoriesByCatgory(
    category: NewsCategories,
  ): Promise<NewsItem[] | FailureEntity> {
    try {
      const result = await this.api.fetchTopStoriesNews(category.toString());
      return result.map(newsModel => mapToNewsCategoryDomain(newsModel));
    } catch (err) {
      return repositoryExceptionHandler(err);
    }
  }

  async getNewsFromSearch(
    searchQuery: string,
    pageNumber: number,
  ): Promise<NewsItem[] | FailureEntity> {
    try {
      const result = await this.api.searchNews(searchQuery, pageNumber);
      return result.map(newsModel => mapToNewsSearchDomain(newsModel));
    } catch (err) {
      return repositoryExceptionHandler(err);
    }
  }
}

export default NewsRepositoryImpl;
