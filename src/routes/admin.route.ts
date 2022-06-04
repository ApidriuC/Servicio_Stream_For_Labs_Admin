import {
  NextFunction, Request, Response, Router,
} from 'express';
import { IRoute } from '../interfaces';
import { AdminControler } from '../controller';
import { isDefinedParamMiddleware, validationMiddleware } from '../middlewares';
import { ConfigDTO } from '../dtos';


/**
 *
 * Managament the routes of config
 * @category Routes
 * @class AdminRouter
 * @implements {IRoute}
 */
class AdminRouter implements IRoute {
  public router = Router();

  public pathIdParam = '/:id';

  constructor() {
    this.createRoutes();
  }

  createRoutes(): void {

   
    // list configs
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => AdminControler
      .list(req, res, next));

   
    // Update config
    this.router.put(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      validationMiddleware(ConfigDTO, true),
      (req: Request, res: Response, next: NextFunction) => AdminControler
        .updateById(req, res, next),
    );

  }
}
export default new AdminRouter().router;
