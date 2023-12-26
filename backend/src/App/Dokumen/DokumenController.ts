import { Request, Response, NextFunction } from "express";
import DokumenService from "./DokumenService";
import { DokumenDto } from "./DokumenDto";
const dokumenService= new DokumenService();
class DokumenController{
    async create(req:Request, res:Response, next:NextFunction){
       
        try{
        const dokumen : DokumenDto = req.body;
        res.status(200).json({
            message:'data sukses dibuat',
            data : await dokumenService.create(dokumen)
        }) 
       }
       catch(error){
        next(error)
       }

    }

}
export default DokumenController;