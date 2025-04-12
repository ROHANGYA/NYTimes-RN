import {AxiosInstance} from 'axios';
import {NewsModel} from '../../models/newsModel';
import {NewsResponseModel} from '../../models/newsResponseModel';
import {endpoints} from './apiEndpoints';
import {NewsModelByCategory} from '../../models/newsByCategoryModel';
import {PaginatedResponseModel} from '../../models/paginatedResponseModel';
import {NewsSearchModel} from '../../models/newsSearchModel';

class NewsApi {
  constructor(private api: AxiosInstance) {}
  async fetchMostViewedNews(): Promise<NewsModel[]> {
    const response = await this.api.get<NewsResponseModel<NewsModel[]>>(
      endpoints.MostViewedNews,
    );
    return response.data.results;
  }

  async fetchTopStoriesNews(category: string): Promise<NewsModelByCategory[]> {
    const response = await this.api.get<
      NewsResponseModel<NewsModelByCategory[]>
    >(`${endpoints.TopStories}/${category}.json`);
    return response.data.results;
  }

  async searchNews(
    query: string,
    pageNumber: number,
  ): Promise<NewsSearchModel[]> {
    const response = await this.api.get<
      NewsResponseModel<PaginatedResponseModel<NewsSearchModel>>
    >(endpoints.SearchNews, {
      params: {
        q: query,
        page: pageNumber,
      },
    });
    const data = response.data.response.docs;
    return data === null ? [] : data;
  }
}

export default NewsApi;
