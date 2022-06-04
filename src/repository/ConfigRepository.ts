/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { ICrud, IConfig } from '../interfaces';
import { Config } from '../models';

/**
 *
 * The config repository 
 * @category Repositorys
 * @class ConfigRepository
 * @implements {ICrud<IConfig, string>}
 */
class ConfigRepository implements ICrud<IConfig, string> {
  /**
   *
   *
   * @param {IConfig} config - The config to create
   * @return {Promise<IConfig>}  A config created
   * @memberof ConfigRepository
   */
  async create(config: IConfig): Promise<IConfig> {
    return config.save();
  }

  /**
   *
   *
   * @return {Promise<Array<IConfig>>}  A list of users
   * @memberof ConfigRepository
   */
  async list(): Promise<Array<IConfig>> {
    return Config.find({});
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IConfig>}  A Config
   * @memberof ConfigRepository
   */
  async getById(id: string): Promise<IConfig | null> {
    return Config.findById(id);
  }

  /**
   *
   *
   * @param {IConfig} config - The config to remove
   * @return {Promise<IConfig>}  A config removed
   * @memberof ConfigRepository
   */
  async remove(config: IConfig): Promise<IConfig> {
    if (config._id) await config.remove();
    return config;
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<IConfig>}  A config removed
   * @memberof ConfigRepository
   */
  async removeById(id: string): Promise<IConfig | null> {
    const userToDelete = await this.getById(id);
    if (userToDelete) await userToDelete.remove();
    return userToDelete;
  }

  /**
   *
   *
   * @param {IConfig} config - The config to updated
   * @return {Promise<IConfig>}  A config updated
   * @memberof ConfigRepository
   */
  async update(config: IConfig): Promise<IConfig> {
    if (config._id) await config.update();
    return config;
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @param {IConfig} config - The config to updated
   * @return {Promise<IConfig>} A config updated
   * @memberof ConfigRepository
   */
  async updateById(id: string, config: IConfig):
  Promise<IConfig | null > {
    const userToUpdate = await this.getById(id);
    if (userToUpdate) {
      userToUpdate.max = config.max;
      userToUpdate.min = config.min;
      userToUpdate.default = config.default;
      await userToUpdate.update();
    }
    return userToUpdate;
  }
}
export default new ConfigRepository();
