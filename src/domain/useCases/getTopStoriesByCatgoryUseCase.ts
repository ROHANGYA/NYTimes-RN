import NewsCategories from '../entities/enums/newsCategories';
import FailureEntity from '../entities/failureEntity';
import {NewsItem} from '../entities/news';
import {NewsRepository} from '../repository/newsRepository';

class GetTopStoriesByCatgoryUseCase {
  constructor(private repository: NewsRepository) {}

  async call(
    newsCategory: NewsCategories,
  ): Promise<NewsItem[] | FailureEntity> {
    return await this.repository.getTopStoriesByCatgory(newsCategory);
  }
}

export default GetTopStoriesByCatgoryUseCase;
