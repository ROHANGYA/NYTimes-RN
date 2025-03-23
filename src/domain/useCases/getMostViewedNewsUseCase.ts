import {NewsItem} from '../entities/news';
import {NewsRepository} from '../repository/newsRepository';

class GetMostViweedNewsUseCase {
  constructor(private repository: NewsRepository) {}

  call(): Promise<NewsItem[]> {
    return this.repository.getMostViewedNews();
  }
}

export default GetMostViweedNewsUseCase;
