import SQLite, {SQLiteDatabase} from 'react-native-sqlite-storage';
import {migrations} from './migrations';

class LocalDB {
  db!: SQLiteDatabase;

  async openDatabase() {
    try {
      this.db = await SQLite.openDatabase({
        name: 'News.db',
        location: 'default', // Ensures the database is saved locally
      });
      console.log('Database opened successfully !');
    } catch (err) {
      console.log('Could not open Database !');
    }
  }

  closeDatabase(): void {
    try {
      this.db.close();
    } catch (err) {
      console.log('Database could not be closed');
    }
  }

  async initialiseDatabase() {
    // Enable promise-based API for SQLite
    SQLite.enablePromise(true);

    // Open or create a database
    await this.openDatabase();

    // Versioning
    await this.db.executeSql(
      'CREATE TABLE IF NOT EXISTS Version (key TEXT PRIMARY KEY, value TEXT);',
    );
    await this.db.executeSql(
      'INSERT OR IGNORE INTO Version (key, value) VALUES ("schema_version", "1");',
    );

    // News
    await this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS News (
      id INTEGER PRIMARY KEY, 
      title TEXT, 
      abstract TEXT, 
      published_date TEXT, 
      image BLOB, 
      category TEXT CHECK(category  IN ('arts','automobiles','business')) DEFAULT NULL
      );`,
    );
  }

  async getDatabaseVersion(): Promise<number> {
    const [result] = await this.db.executeSql(
      'SELECT value FROM Version WHERE key = "schema_version";',
    );
    return result.rows.length ? parseInt(result.rows.item(0).value, 10) : 1;
  }

  async setDatabaseVersion(version: number) {
    await this.db.executeSql(
      'UPDATE Version SET value = ? WHERE key = "schema_version";',
      [version.toString()],
    );
  }

  async applyDbMigrations() {
    const currentVersion = await this.getDatabaseVersion();
    for (const migration of migrations) {
      if (migration.version > currentVersion) {
        await migration.script(this.db);
        await this.setDatabaseVersion(migration.version);
      }
    }
  }
}

export default LocalDB;
