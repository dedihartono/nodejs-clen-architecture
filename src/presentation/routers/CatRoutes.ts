import express, { type Router, type Request, type Response } from 'express';
import { type CreateCat } from '../../domain/interfaces/use-case/cats/CreateCat';
import { type DeleteCat } from '../../domain/interfaces/use-case/cats/DeleteCat';
import { type GetAllCat } from '../../domain/interfaces/use-case/cats/GetAllCat';
import { type GetOneCat } from '../../domain/interfaces/use-case/cats/GetOneCat';
import { type UpdateCat } from '../../domain/interfaces/use-case/cats/UpdateCat';
import { type CatRequestModel } from '../../domain/entities/Cat';

export default function CatRoutes(
  createCat: CreateCat,
  getAllCat: GetAllCat,
  getOneCat: GetOneCat,
  deleteCat: DeleteCat,
  updateCat: UpdateCat,
): Router {
  const router = express.Router();

  router.get('/', (req: Request, res: Response): void => {
    getAllCat
      .execute()
      .then((cats) => {
        res.status(200).json(cats);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        res.status(500).send({ message: 'Error fetching data' });
      });
  });

  router.post('/', (req: Request, res: Response) => {
    try {
      const catData: CatRequestModel = req.body;
      createCat.execute(catData);
      res.status(201).json({ message: 'Cat created successfully' });
    } catch (err) {
      res.status(500).send({ message: 'Error saving data' });
    }
  });

  router.get('/:id', (req: Request, res: Response): void => {
    getOneCat
      .execute(req.params.id)
      .then((cat) => {
        res.status(200).json(cat);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        res.status(500).send({ message: 'Error fetching data' });
      });
  });

  router.patch('/:id', (req: Request, res: Response) => {
    try {
      const catData: CatRequestModel = req.body;
      updateCat.execute(req.params.id, catData);

      res.status(200).json({ message: 'Cat updated successfully' });
    } catch (err) {
      res.status(500).send({ message: 'Error saving data' });
    }
  });

  router.delete('/:id', (req: Request, res: Response) => {
    try {
      deleteCat.execute(req.params.id);
      res.status(200).json({ message: 'Cat deleted successfully' });
    } catch (err) {
      res.status(500).send({ message: 'Error deleting cat' });
    }
  });

  return router;
}
