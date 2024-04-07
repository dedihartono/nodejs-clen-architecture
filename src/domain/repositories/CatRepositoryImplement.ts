import { type CatDataSource } from '../../data/interfaces/data-sources/CatDataSource';
import { type CatRequestModel, type CatResponseModel } from '../entities/Cat';
import { type CatRepository } from '../interfaces/repositories/CatRepository';

export class CatRepositoryImplement implements CatRepository {
  catDataSource: CatDataSource;
  constructor(catDataSource: CatDataSource) {
    this.catDataSource = catDataSource;
  }

  createCat(data: CatRequestModel): void {
    this.catDataSource.create(data);
  }

  async getCats(): Promise<CatResponseModel[]> {
    const result = await this.catDataSource.getAll();
    return result;
  }

  async getCat(id: string): Promise<CatResponseModel | null> {
    const result = await this.catDataSource.getOne(id);
    return result;
  }

  updateCat(id: string, data: CatRequestModel): void {
    this.catDataSource.updateOne(id, data);
  }

  deleteCat(id: string): void {
    this.catDataSource.deleteOne(id);
  }
}
