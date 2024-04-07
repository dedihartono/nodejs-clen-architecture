import { type CatResponseModel } from '../../entities/Cat';

export interface GetAllCatUseCase {
  execute: () => Promise<CatResponseModel[]>;
}
