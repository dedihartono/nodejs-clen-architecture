import { type CatRequestModel } from '../../entities/Cat';

export interface UpdateCatUseCase {
  execute: (id: string, cat: CatRequestModel) => void;
}
