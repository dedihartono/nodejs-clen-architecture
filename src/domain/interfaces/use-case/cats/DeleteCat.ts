import { type DeleteCatUseCase } from '../../../ use-cases/cats/DeleteCatUseCase';
import { type CatRepository } from '../../repositories/CatRepository';

export class DeleteCat implements DeleteCatUseCase {
  repository: CatRepository;
  constructor(repository: CatRepository) {
    this.repository = repository;
  }

  execute(id: string): void {
    this.repository.deleteCat(id);
  }
}
