"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DokumenController_1 = __importDefault(require("./DokumenController"));
const route = (0, express_1.Router)();
route.route('/dokumen').post(DokumenController_1.default.);
