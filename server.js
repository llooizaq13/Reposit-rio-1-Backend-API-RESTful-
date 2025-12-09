const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let pokemonList = [
    { id: 1, name: 'Bulbasaur', type: 'Grass/Poison', level: 5, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', hp: 45, attack: 49, defense: 49, special_attack: 65, special_defense: 65, speed: 45 },
    { id: 2, name: 'Charmander', type: 'Fire', level: 5, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', hp: 39, attack: 52, defense: 43, special_attack: 60, special_defense: 50, speed: 65 },
    { id: 3, name: 'Squirtle', type: 'Water', level: 5, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', hp: 44, attack: 48, defense: 65, special_attack: 50, special_defense: 64, speed: 43 }
];

let nextId = pokemonList.length > 0 ? Math.max(...pokemonList.map(p => p.id)) + 1 : 1;

app.get('/pokemon', (req, res) => {
    console.log('GET /pokemon - Retornando lista completa.');
    res.json(pokemonList);
});

app.post('/pokemon', (req, res) => {
    const newPokemonData = req.body;
    
    if (!newPokemonData.name || !newPokemonData.type) {
        return res.status(400).json({ message: "Nome e Tipo são campos obrigatórios." });
    }
    
    const newPokemon = {
        id: nextId++,
        ...newPokemonData,
        hp: Number(newPokemonData.hp || 40),
        attack: Number(newPokemonData.attack || 40),
        defense: Number(newPokemonData.defense || 40),
        special_attack: Number(newPokemonData.special_attack || 40),
        special_defense: Number(newPokemonData.special_defense || 40),
        speed: Number(newPokemonData.speed || 40),
        level: Number(newPokemonData.level || 1),
    };

    pokemonList.push(newPokemon);
    console.log(`POST /pokemon - Novo Pokémon adicionado: ${newPokemon.name} (ID: ${newPokemon.id})`);
    res.status(201).json(newPokemon);
});

app.put('/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    
    const index = pokemonList.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Pokémon não encontrado." });
    }

    pokemonList[index] = {
        ...pokemonList[index],
        ...updatedData,
        id: id,
        hp: Number(updatedData.hp),
        attack: Number(updatedData.attack),
        defense: Number(updatedData.defense),
        special_attack: Number(updatedData.special_attack),
        special_defense: Number(updatedData.special_defense),
        speed: Number(updatedData.speed),
        level: Number(updatedData.level),
    };
    
    console.log(`PUT /pokemon/${id} - Pokémon ${pokemonList[index].name} atualizado.`);
    res.json(pokemonList[index]);
});

app.delete('/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = pokemonList.length;
    
    pokemonList = pokemonList.filter(p => p.id !== id);

    if (pokemonList.length === initialLength) {
        return res.status(404).json({ message: "Pokémon não encontrado para exclusão." });
    }

    console.log(`DELETE /pokemon/${id} - Pokémon deletado.`);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`============================================`);
    console.log(`API do Pokémon rodando em: http://localhost:${PORT}`);
    console.log(`Endpoints CRUD disponíveis.`);
    console.log(`============================================`);
});