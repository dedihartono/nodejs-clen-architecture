import { type GetAllCatUseCase } from '../../../ use-cases/cats/GetAllCatUseCase';
import { type CatResponseModel } from '../../../entities/Cat';
import { type CatRepository } from '../../repositories/CatRepository';

export class GetAllCat implements GetAllCatUseCase {
  repository: CatRepository;
  constructor(respository: CatRepository) {
    this.repository = respository;
  }

  async execute(): Promise<CatResponseModel[]> {
    return await this.repository.getCats();
  }
}
