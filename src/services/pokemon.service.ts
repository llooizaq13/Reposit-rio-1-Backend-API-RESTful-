import prisma from '../prismaClient';

export const findAll = async () => {
  return prisma.pokemon.findMany({ orderBy: { id: 'asc' } });
};

export const findById = async (id: number) => {
  return prisma.pokemon.findUnique({ where: { id } });
};

export const create = async (data: any) => {
  // Aqui você pode validar os campos antes de salvar
  return prisma.pokemon.create({ data });
};

export const update = async (id: number, data: any) => {
  return prisma.pokemon.update({ where: { id }, data });
};

export const remove = async (id: number) => {
  return prisma.pokemon.delete({ where: { id } });
};
