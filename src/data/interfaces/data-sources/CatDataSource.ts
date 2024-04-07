import {
  type CatRequestModel,
  type CatResponseModel,
} from '../../../domain/entities/Cat';

export interface CatDataSource {
  create: (data: CatRequestModel) => void;
  getAll: () => Promise<CatResponseModel[]>;
  deleteOne: (id: string) => void;
  updateOne: (id: string, data: CatRequestModel) => void;
  getOne: (id: string) => Promise<CatResponseModel | null>;
}
