import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('roadside.db');

export const initDB = () => {
  db.execAsync('CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY AUTOINCREMENT, note TEXT, uri TEXT);');
};

export const insertEntry = async (entry) => {
  await db.runAsync('INSERT INTO entries (note, uri) VALUES (?, ?)', entry.note, entry.uri);
};

export const getEntries = async () => {
  const result = await db.getAllAsync('SELECT * FROM entries ORDER BY id DESC');
  return result;
};
