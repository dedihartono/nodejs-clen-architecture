export interface NoSQLDatabaseWrapper {
  find: (query: object) => Promise<object[]>;
  insertOne: (data: object) => void;
  deleteOne: (id: string) => void;
  updateOne: (id: string, data: object) => void;
}
