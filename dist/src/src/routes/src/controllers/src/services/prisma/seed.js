"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = __importDefault(require("../src/prismaClient"));
async function main() {
    const a = await prismaClient_1.default.pokemon.create({
        data: {
            name: 'Pikachu',
            type: 'electric',
            level: 10,
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            hp: 35,
            attack: 55,
            defense: 40,
            special_attack: 50,
            special_defense: 50,
            speed: 90
        }
    });
    console.log('created', a.name);
}
main()
    .catch(e => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prismaClient_1.default.$disconnect();
});
