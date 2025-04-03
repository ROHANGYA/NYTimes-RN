import {AxiosInstance} from 'axios';
import {NewsModel} from '../../models/newsModel';
import {NewsResponseModel} from '../../models/newsResponseModel';
import {endpoints} from './apiEndpoints';
import {NewsModelByCategory} from '../../models/newsByCategoryModel';

class NewsApi {
  constructor(private api: AxiosInstance) {}
  async fetchMostViewedNews(): Promise<NewsModel[]> {
    const response = await this.api.get<NewsResponseModel<NewsModel>>(
      endpoints.MostViewedNews,
    );
    //await new Promise(resolver => setTimeout(resolver, 3000));
    return response.data.results;
  }

  async fetchTopStoriesNews(category: string): Promise<NewsModelByCategory[]> {
    const response = await this.api.get<NewsResponseModel<NewsModelByCategory>>(
      `${endpoints.TopStories}/${category}.json`,
    );
    return response.data.results;
  }
}

export default NewsApi;
