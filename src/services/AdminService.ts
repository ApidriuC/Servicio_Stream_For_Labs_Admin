/* eslint-disable class-methods-use-this */
import { ICrud, IConfig} from '../interfaces';
import { ConfigRepository } from '../repository';
import { Config } from '../models';

/**
 *
 * The config service,layer of repository pattern
 * @category Services
 * @class AdminService
 * @implements {ICrud<IConfig, string>}
 */
class AdminService implements ICrud<IConfig, string> {
  /**
   *
   * Create a config
   * @param {IConfig} config - The config to create
   * @return {Promise<IConfig>}  A config created
   * @memberof AdminService
   */
  async create(config: IConfig): Promise<IConfig> {
    return ConfigRepository.create(config);
  }

  /**
   *
   * List all configs
   * @return {Promise<Array<IConfig>>}  A list of configs
   * @memberof AdminService
   */
  async list(): Promise<Array<IConfig>> {
    return ConfigRepository.list();
  }

  /**
   *
   * Find by id a config
   * @param {string} id - The id to find
   * @return {Promise<IConfig>}  A config
   * @memberof AdminService
   */
  async getById(id: string): Promise<IConfig| null> {
    return ConfigRepository.getById(id);
  }

  /**
   *
   * Remove a config
   * @param {IConfig} config - The config to remove
   * @return {Promise<IConfig>}  A config removed
   * @memberof AdminService
   */
  async remove(config: IConfig): Promise<IConfig> {
    return ConfigRepository.remove(config);
  }

  /**
   *
   * Remove by id a config
   * @param {string} id - The id to find
   * @return {Promise<IConfig>}  A config removed
   * @memberof AdminService
   */
  async removeById(id: string): Promise<IConfig| null> {
    const taskToDelete = await this.getById(id);
    if (taskToDelete) await taskToDelete.remove();
    return taskToDelete;
  }

  /**
   *
   * Update a config
   * @param {IConfig} config - The config to updated
   * @return {Promise<IConfig>}  A config updated
   * @memberof AdminService
   */
  async update(config: IConfig): Promise<IConfig> {
    return ConfigRepository.update(config);
  }

  /**
   *
   * Update by id a config
   * @param {string} id - The id to find
   * @param {IConfig} config - The config to updated
   * @return {Promise<IConfig>} A config updated
   * @memberof AdminService
   */
  async updateById(id: string, body: Object): Promise<IConfig| null > {
    // eslint-disable-next-line no-unused-vars
    return new Promise<IConfig| null>((resolve, _) => {
      Config.findOneAndUpdate({ _id: id }, { ...body }, { new: true },
        (error, task: IConfig| null) => resolve(task));
    });
  }
}

export default new AdminService();
