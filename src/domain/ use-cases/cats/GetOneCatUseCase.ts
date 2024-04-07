import { type CatResponseModel } from '../../entities/Cat';

export interface GetOneCatUseCase {
  execute: (id: string) => Promise<CatResponseModel | null>;
}
