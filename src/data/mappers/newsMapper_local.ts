import {ResultSet} from 'react-native-sqlite-storage';
import {NewsItem} from '../../domain/entities/news';
import {base64ImageToUri} from '../../utils/imageUtils';

export function mapLocalToNewsDomain(resultSet: ResultSet): NewsItem[] {
  const newsList: NewsItem[] = [];
  for (let i = 0; i < resultSet.rows.length; i++) {
    const row = resultSet.rows.item(i);
    newsList.push({
      id: row.id,
      title: row.title,
      description: row.abstract,
      date: row.published_date,
      imageUrl: base64ImageToUri(row.image),
    });
  }
  return newsList;
}
