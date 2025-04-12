import FailureEntity from '../entities/failureEntity';
import {NewsItem} from '../entities/news';
import {NewsRepository} from '../repository/newsRepository';

class getNewsFromSearchQueryUseCase {
  constructor(private repository: NewsRepository) {}

  async call(
    searchQuery: string,
    pageNumber: number,
  ): Promise<NewsItem[] | FailureEntity> {
    return await this.repository.getNewsFromSearch(searchQuery, pageNumber);
  }
}

export default getNewsFromSearchQueryUseCase;
