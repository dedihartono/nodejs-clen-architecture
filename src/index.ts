import dotenv from 'dotenv';
import express, { type Express, type Request, type Response } from 'express';
import { Pool } from 'pg';
import { PgCatDataSource } from './data/data-sources/postgresql/PgCatDataSource';
import { CreateCat } from './domain/interfaces/use-case/cats/CreateCat';
import { DeleteCat } from './domain/interfaces/use-case/cats/DeleteCat';
import { GetAllCat } from './domain/interfaces/use-case/cats/GetAllCat';
import { GetOneCat } from './domain/interfaces/use-case/cats/GetOneCat';
import { UpdateCat } from './domain/interfaces/use-case/cats/UpdateCat';
import { CatRepositoryImplement } from './domain/repositories/CatRepositoryImplement';
import CatRoutes from './presentation/routers/CatRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

function getPGDS(): PgCatDataSource {
  const db = new Pool({
    user: 'dehart',
    host: '127.0.0.1',
    database: 'animals_db',
    password: 'dedi123A',
    port: 5432,
  });
  return new PgCatDataSource(db);
}

const dataSource = getPGDS();

const catMiddleware = CatRoutes(
  new CreateCat(new CatRepositoryImplement(dataSource)),
  new GetAllCat(new CatRepositoryImplement(dataSource)),
  new GetOneCat(new CatRepositoryImplement(dataSource)),
  new DeleteCat(new CatRepositoryImplement(dataSource)),
  new UpdateCat(new CatRepositoryImplement(dataSource)),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use('/cats', catMiddleware);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
