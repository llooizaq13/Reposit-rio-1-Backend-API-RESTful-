"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.findById = exports.findAll = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const findAll = async () => {
    return prismaClient_1.default.pokemon.findMany({ orderBy: { id: 'asc' } });
};
exports.findAll = findAll;
const findById = async (id) => {
    return prismaClient_1.default.pokemon.findUnique({ where: { id } });
};
exports.findById = findById;
const create = async (data) => {
    // Aqui você pode validar os campos antes de salvar
    return prismaClient_1.default.pokemon.create({ data });
};
exports.create = create;
const update = async (id, data) => {
    return prismaClient_1.default.pokemon.update({ where: { id }, data });
};
exports.update = update;
const remove = async (id) => {
    return prismaClient_1.default.pokemon.delete({ where: { id } });
};
exports.remove = remove;
