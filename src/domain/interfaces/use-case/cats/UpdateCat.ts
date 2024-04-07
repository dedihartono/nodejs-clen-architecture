import { type UpdateCatUseCase } from '../../../ use-cases/cats/UpdateCatUseCase';
import { type CatRequestModel } from '../../../entities/Cat';
import { type CatRepository } from '../../repositories/CatRepository';

export class UpdateCat implements UpdateCatUseCase {
  repository: CatRepository;
  constructor(repository: CatRepository) {
    this.repository = repository;
  }

  execute(id: string, cat: CatRequestModel): void {
    this.repository.updateCat(id, cat);
  }
}
