import { type GetOneCatUseCase } from '../../../ use-cases/cats/GetOneCatUseCase';
import { type CatResponseModel } from '../../../entities/Cat';
import { type CatRepository } from '../../repositories/CatRepository';

export class GetOneCat implements GetOneCatUseCase {
  repository: CatRepository;
  constructor(repository: CatRepository) {
    this.repository = repository;
  }

  async execute(id: string): Promise<CatResponseModel | null> {
    return await this.repository.getCat(id);
  }
}
