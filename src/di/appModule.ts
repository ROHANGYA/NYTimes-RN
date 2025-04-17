import apiClient from '../data/dataSources/remote/apiClient';
import NewsApi from '../data/dataSources/remote/newsApi';
import NewsRepositoryImpl from '../data/repository/newsRepositoryImpl';
import GetMostViewedNewsUseCase from '../domain/useCases/getMostViewedNewsUseCase';

import getNewsFromSearchQueryUseCase from '../domain/useCases/getNewsFromSearchQueryUseCase';
import GetTopStoriesByCatgoryUseCase from '../domain/useCases/getTopStoriesByCatgoryUseCase';

class AppModule {
  newsApi: NewsApi;
  newsRepository: NewsRepositoryImpl;
  getMostViewedNewsUseCase: GetMostViewedNewsUseCase;
  getTopStoriesByCategoryUseCase: GetTopStoriesByCatgoryUseCase;
  getNewsFromSearchQueryUseCase: getNewsFromSearchQueryUseCase;

  constructor() {
    // Initialize data sources
    this.newsApi = new NewsApi(apiClient);

    // Initialize repositories
    this.newsRepository = new NewsRepositoryImpl(this.newsApi);

    // Initialize use cases
    this.getMostViewedNewsUseCase = new GetMostViewedNewsUseCase(
      this.newsRepository,
    );
    this.getTopStoriesByCategoryUseCase = new GetTopStoriesByCatgoryUseCase(
      this.newsRepository,
    );
    this.getNewsFromSearchQueryUseCase = new getNewsFromSearchQueryUseCase(
      this.newsRepository,
    );
  }
}

// Create a singleton instance
const di = new AppModule();

export default di;
