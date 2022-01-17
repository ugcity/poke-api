const { test } = require('@playwright/test');
let starterPokemon = [1, 4, 7, 25, 133, 152, 155, 158, 252, 255, 258, 387, 390, 393]
let randomStarterPokemon = starterPokemon[Math.floor(Math.random() * starterPokemon.length)];

test('Whose That Pokemon?!?!?', async ({ request }) => {
  const pokemon = await request.get(`pokemon/${randomStarterPokemon}`);
  console.log(randomStarterPokemon);
  let myStarterPokemon = await pokemon.json()
  console.log(myStarterPokemon.name)
});

