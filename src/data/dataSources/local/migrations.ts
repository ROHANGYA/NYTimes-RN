import {SQLiteDatabase} from 'react-native-sqlite-storage';

type MigrationType = {
  version: number;
  script: (db: SQLiteDatabase) => Promise<void>;
};

// Database migrations go here...
export const migrations: MigrationType[] = [
  // {
  //   version: 2,
  //   script: async (db: SQLiteDatabase) => {
  //   },
  // },
  //   {
  //     version: 3,
  //     script: async (db: SQLiteDatabase) => {
  //     },
  //   },
];
