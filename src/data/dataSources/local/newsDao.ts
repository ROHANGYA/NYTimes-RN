import NewsCategories from '../../../domain/entities/enums/newsCategories';
import {NewsModel} from '../../models/newsModel';
import LocalDB from './database';

class NewsDao {
  constructor(private localDataSource: LocalDB) {}

  async insertMostViewedNews(newsItems: NewsModel[]) {
    this.localDataSource.db.transaction(tx => {
      newsItems.forEach(news =>
        tx.executeSql(
          `INSERT INTO News (id, title, abstract, date, imageUrl) VALUES (?, ?, ?, ?, ?);`,
          [
            news.id,
            news.title,
            news.abstract,
            news.published_date,
            news.media[0]['media-metadata']![2].url ?? '',
          ],
          (tx, results) => console.log('News added successfully'),
          error => console.log('Error inserting News: ', error),
        ),
      );
    });
  }

  async insertOfInterestNews(
    newsItems: NewsModel[],
    category: NewsCategories,
  ) {}

  async fetchMostViewedNews(): Promise<NewsModel[]> {
    return [];
  }
  async fetchOfInterestNews(): Promise<NewsModel[]> {
    return [];
  }

  async nukeDatabase() {
    this.localDataSource.db.executeSql(`DELETE * from News `);
    this.localDataSource.db.executeSql(`DELETE * from Version `);
  }
}
