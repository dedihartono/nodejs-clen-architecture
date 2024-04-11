import {
  type CatRequestModel,
  type CatResponseModel,
} from '../../../domain/entities/Cat';
import { type CatDataSource } from '../../interfaces/data-sources/CatDataSource';
import { type SQLDatabaseWrapper } from '../../interfaces/data-sources/SQLDatabaseWrapper';

const DB_TABLE = 'cats';

export class PgCatDataSource implements CatDataSource {
  private readonly db: SQLDatabaseWrapper;
  constructor(db: SQLDatabaseWrapper) {
    this.db = db;
  }

  async create(cat: CatRequestModel): Promise<void> {
    await this.db.query(`insert into ${DB_TABLE} (name) values ($1)`, [
      cat.name,
    ]);
  }

  async getAll(): Promise<CatResponseModel[]> {
    const dbResponse = await this.db.query(`select * from ${DB_TABLE}`);
    const result = (dbResponse.rows as { id: string; name: string }[]).map(
      (item) => ({
        id: item.id,
        name: item.name,
      }),
    );
    return result;
  }

  async deleteOne(id: string): Promise<void> {
    await this.db.query(`delete from ${DB_TABLE} where id = $1`, [id]);
  }

  async updateOne(id: string, data: CatRequestModel): Promise<void> {
    await this.db.query(`update ${DB_TABLE} set name = $1 where id = $2`, [
      data.name,
      id,
    ]);
  }

  async getOne(id: string): Promise<CatResponseModel | null> {
    const dbResponse = await this.db.query(
      `select * from ${DB_TABLE} where id = $1 limit 1`,
      [id],
    );
    const result = (dbResponse.rows as { id: string; name: string }[]).map(
      (item) => ({
        id: item.id,
        name: item.name,
      }),
    );
    return result[0];
  }
}
