/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { NextFunction, Response, Request } from 'express';
import { IConfig } from '../interfaces';
import { HttpException } from '../exceptions';
import { AdminService } from '../services';
/**
 *
 * The config controller
 * @category Controllers
 * @class AdminControler
 */
class AdminControler {
  /**
   *
   * List all configs
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of configs
   * @memberof AdminControler
   */
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const configs: Array<IConfig> = await AdminService.list();
      res.json(configs);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }


  /**
   *
   * Update config by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of userS
   * @memberof AdminControler
   */
  public static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const dft = req.body.default
      const configUpdated: IConfig | null = await AdminService
        .updateById(id, { default:dft });
      if (!configUpdated) throw new HttpException(404, 'Config not found');
      res.json(configUpdated);
    } catch (error) {
      return next(new HttpException(error.status || 500, error.message));
    }
  }

}
export default AdminControler;
