import { Router } from 'express';
import { listPokemon, getPokemon, createPokemon, updatePokemon, deletePokemon } from '../controllers/pokemon.controller';

const router = Router();

router.get('/', listPokemon);
router.get('/:id', getPokemon);
router.post('/', createPokemon);
router.put('/:id', updatePokemon);
router.delete('/:id', deletePokemon);

export default router;
