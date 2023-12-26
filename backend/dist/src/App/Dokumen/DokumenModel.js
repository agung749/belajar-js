"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DokumenModel = void 0;
const objection_1 = require("objection");
class DokumenModel extends objection_1.Model {
    static get tableName() {
        return "Dokumen";
    }
}
exports.DokumenModel = DokumenModel;
