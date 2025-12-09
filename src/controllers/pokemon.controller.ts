import { Request, Response } from 'express';
import * as service from '../services/pokemon.service';

export const listPokemon = async (_req: Request, res: Response) => {
  try {
    const pokemons = await service.findAll();
    res.json(pokemons);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getPokemon = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const poke = await service.findById(id);
    if (!poke) return res.status(404).json({ message: 'Pokémon não encontrado' });
    res.json(poke);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createPokemon = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    
    // Validação dos campos obrigatórios
    if (!payload.name || !payload.type) {
      return res.status(400).json({ message: 'Nome e Tipo são campos obrigatórios.' });
    }

    const created = await service.create(payload);
    res.status(201).json(created);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updatePokemon = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const payload = req.body;
    const updated = await service.update(id, payload);
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deletePokemon = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await service.remove(id);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
