import {NewsItem} from '../../domain/entities/news';
import {NewsModelByCategory} from '../models/newsByCategoryModel';
import {NewsModel} from '../models/newsModel';

export function mapToNewsDomain(model: NewsModel): NewsItem {
  return {
    id: model.id,
    title: model.title,
    description: model.abstract,
    date: model.published_date.toLocaleString(),
    imageUrl:
      model.media.length > 0
        ? model.media[0]['media-metadata']![2].url ?? ''
        : '',
  };
}

export function mapToNewsCategoryDomain(model: NewsModelByCategory): NewsItem {
  return {
    id: 1,
    title: model.title,
    description: model.abstract,
    date: model.published_date.toLocaleString(),
    imageUrl:
      model.multimedia != null && model.multimedia.length > 0
        ? model.multimedia[1].url
        : '',
  };
}
