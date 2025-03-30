import {NewsItem} from '../../domain/entities/news';
import {NewsModel} from '../models/newsModel';

export function mapToDomain(model: NewsModel): NewsItem {
  return {
    id: model.id,
    title: model.title,
    description: model.abstract,
    date: model.published_date.toLocaleString(),
    imageUrl:
      model.media.length > 0 ? model.media[0]['media-metadata'][2].url : '',
  };
}
