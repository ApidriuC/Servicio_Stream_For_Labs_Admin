/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { IsNumber, IsNotEmpty, IsOptional} from 'class-validator';

/**
 *
 * DTO for config 
 * @category DTOs
 * @class ConfigDTO
 */
class ConfigDTO {
 
    @IsNumber()
    @IsOptional()
    public max: number;


    @IsNumber()
    @IsOptional()
    public min: number;

    @IsNotEmpty()
    @IsNumber()
    public default: number;

    /**
   * Creates an instance of ConfigDTO.
   * @param {number} max - the max memory
   * @param {number} min - the min memory
   * @param {number} default - the default memory
   * @memberof ConfigDTO
   */
    constructor(max: number, min: number, dft: number) {
      this.max = max
      this.min = min
      this.default = dft
    }
}

export default ConfigDTO;
