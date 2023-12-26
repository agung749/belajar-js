import { Response,Request,NextFunction } from "express";
import { Repository } from "../Repositories/Repositories";
import {DokumenModel} from "./DokumenModel";
import executeTransactionAsync from "../Repositories/ExecuteTransactionAsync";
import { DokumenDto } from "./DokumenDto";
const { v4: uuidv4 } = require("uuid")
class DokumenService{
    private carBrandRepo: Repository<DokumenModel>;

    constructor() {
      this.carBrandRepo = new Repository(DokumenModel);
    }
  
    async getAll(): Promise<DokumenModel[]> {
      return await this.carBrandRepo.findAll();
    }
    
    async create(dok: DokumenDto): Promise<DokumenModel> {
        const result = await executeTransactionAsync(async() => {
          const dokumen: Partial<DokumenModel> = {
            id: uuidv4(),
            dokumen:dok.dokumen,

          };
          return await this.carBrandRepo.save(brand);
        })
        return result;
      }
}
export default DokumenService;