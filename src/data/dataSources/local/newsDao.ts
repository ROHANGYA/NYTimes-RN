import {ResultSet} from 'react-native-sqlite-storage';
import NewsCategories from '../../../domain/entities/enums/newsCategories';
import {NewsModel} from '../../models/newsModel';
import LocalDB from './database';
import {convertImageToBase64} from '../../../utils/imageUtils';

class NewsDao {
  constructor(private localDataSource: LocalDB) {}

  async insertMostViewedNews(newsItems: NewsModel[]) {
    newsItems.forEach(async (news, index, array) => {
      await this.insertNewsItem(news);
    });
  }

  private async insertNewsItem(news: NewsModel) {
    const base64Image =
      news.media.length > 0
        ? (await convertImageToBase64(
            news.media[0]['media-metadata']![2].url,
          )) ?? ''
        : '';

    await this.localDataSource.db.executeSql(
      `INSERT INTO News (id, title, abstract, published_date, image) VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
            title = EXCLUDED.title,
            abstract = EXCLUDED.abstract,
            published_date = EXCLUDED.published_date,
            image = EXCLUDED.image;`,
      [news.id, news.title, news.abstract, news.published_date, base64Image],
      (tx, results) => console.log(`News added successfully`),
      error => console.log(`Error inserting News: ${error}`),
    );
  }

  async fetchMostViewedNews(): Promise<ResultSet> {
    const results = await this.localDataSource.db.executeSql(
      `SELECT * FROM News;`,
      [],
    );
    const rows = results[0];
    return rows;
  }

  async insertOfInterestNews(newsItems: NewsModel[], category: NewsCategories) {
    // TODO
  }

  async fetchOfInterestNews(): Promise<NewsModel[]> {
    return [];
  }

  async nukeDatabase() {
    this.localDataSource.db.executeSql(`DELETE * from News;`);
    this.localDataSource.db.executeSql(`DELETE * from Version;`);
  }
}

export default NewsDao;
