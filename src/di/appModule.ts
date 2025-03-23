import NewsApi from '../data/dataSources/remote/newsApi';
import NewsRepositoryImpl from '../data/repository/newsRepositoryImpl';
import {NewsRepository} from '../domain/repository/newsRepository';
import GetMostViweedNewsUseCase from '../domain/useCases/getMostViewedNewsUseCase';

class AppModule {
  newsApi: NewsApi;
  newsRepository: NewsRepositoryImpl;
  getMostViweedNewsUseCase: GetMostViweedNewsUseCase;

  constructor() {
    // Initialize data sources
    this.newsApi = new NewsApi();

    // Initialize repositories
    this.newsRepository = new NewsRepositoryImpl(this.newsApi);

    // Initialize use cases
    this.getMostViweedNewsUseCase = new GetMostViweedNewsUseCase(
      this.newsRepository,
    );
  }
}

// Create a singleton instance
const di = new AppModule();

export default di;
