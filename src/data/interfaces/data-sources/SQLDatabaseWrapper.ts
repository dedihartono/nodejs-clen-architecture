export interface SQLDatabaseWrapper {
  query: (
    querystring: string,
    queryConfig?: any[],
  ) => Promise<{ rows: object[] }>;
}
