import {
  type CatRequestModel,
  type CatResponseModel,
} from '../../entities/Cat';

export interface CatRepository {
  createCat: (cat: CatRequestModel) => void;
  deleteCat: (id: string) => void;
  updateCat: (id: string, data: CatRequestModel) => void;
  getCats: () => Promise<CatResponseModel[]>;
  getCat: (id: string) => Promise<CatResponseModel | null>;
}
