import { type CatRequestModel } from '../../entities/Cat';

export interface CreateCatUseCase {
  execute: (cat: CatRequestModel) => void;
}
