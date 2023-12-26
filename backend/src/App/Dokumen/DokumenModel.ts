import { Model,ModelObject } from "objection";

export class DokumenModel extends Model {
    id !: string;
    id_user!:string;
    foto_dokumen!:string;
    jenis_dokumen!:string;
    created_at!: Date;
    updated_at!: Date;

  static get tableName() {
    return "Dokumen";
  }
}

export type CarBrand = ModelObject<DokumenModel>
