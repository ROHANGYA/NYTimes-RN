import apiClient from '../data/dataSources/remote/apiClient';
import NewsApi from '../data/dataSources/remote/newsApi';
import NewsRepositoryImpl from '../data/repository/newsRepositoryImpl';
import GetMostViweedNewsUseCase from '../domain/useCases/getMostViewedNewsUseCase';
import GetTopStoriesByCatgoryUseCase from '../domain/useCases/getTopStoriesByCatgoryUseCase';

class AppModule {
  newsApi: NewsApi;
  newsRepository: NewsRepositoryImpl;
  getMostViewedNewsUseCase: GetMostViweedNewsUseCase;
  getTopStoriesByCategoryUseCase: GetTopStoriesByCatgoryUseCase;

  constructor() {
    // Initialize data sources
    this.newsApi = new NewsApi(apiClient);

    // Initialize repositories
    this.newsRepository = new NewsRepositoryImpl(this.newsApi);

    // Initialize use cases
    this.getMostViewedNewsUseCase = new GetMostViweedNewsUseCase(
      this.newsRepository,
    );
    this.getTopStoriesByCategoryUseCase = new GetTopStoriesByCatgoryUseCase(
      this.newsRepository,
    );
  }
}

// Create a singleton instance
const di = new AppModule();

export default di;
