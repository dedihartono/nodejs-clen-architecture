import { type CreateCatUseCase } from '../../../ use-cases/cats/CreateCatUseCase';
import { type CatRequestModel } from '../../../entities/Cat';
import { type CatRepository } from '../../repositories/CatRepository';

export class CreateCat implements CreateCatUseCase {
  respository: CatRepository;
  constructor(respository: CatRepository) {
    this.respository = respository;
  }

  execute(cat: CatRequestModel): void {
    this.respository.createCat(cat);
  }
}
