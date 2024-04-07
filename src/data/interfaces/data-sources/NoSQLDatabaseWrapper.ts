export interface NoSQLDatabaseWrapper {
  find: (query: object) => Promise<any[]>;
  insertOne: (doc: any) => void;
  deleteOne: (id: string) => void;
  updateOne: (id: string, data: object) => void;
}
