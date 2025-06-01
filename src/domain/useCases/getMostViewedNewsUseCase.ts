import FailureEntity from '../entities/failureEntity';
import {NewsItem} from '../entities/news';
import {NewsRepository} from '../repository/newsRepository';

class GetMostViewedNewsUseCase {
  constructor(private repository: NewsRepository) {}

  async call(isOffline: boolean = false): Promise<NewsItem[] | FailureEntity> {
    return isOffline
      ? await this.repository.getMostViewedNewsFromLocal()
      : await this.repository.getMostViewedNews();
  }
}

export default GetMostViewedNewsUseCase;
