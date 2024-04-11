export interface SQLDatabaseWrapper {
  query: (querystring: string, queryConfig?: string[]) => Promise<{ rows: [] }>;
}
