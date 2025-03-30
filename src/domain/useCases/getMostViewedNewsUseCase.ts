import {NewsItem} from '../entities/news';
import {NewsRepository} from '../repository/newsRepository';

class GetMostViewedNewsUseCase {
  constructor(private repository: NewsRepository) {}

  async call(): Promise<NewsItem[]> {
    return await this.repository.getMostViewedNews();
  }
}

export default GetMostViewedNewsUseCase;
