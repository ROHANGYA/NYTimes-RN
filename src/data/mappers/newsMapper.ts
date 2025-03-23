import {NewsItem} from '../../domain/entities/news';
import {NewsModel} from '../models/newsModel';

export function mapToDomain(model: NewsModel): NewsItem {
  return {
    id: model.id,
    title: model.title,
    description: model.abstract,
    date: model.published_date.toDateString(),
    imageUrl: model.media[0]['media-metadata'][0].url,
  };
}
