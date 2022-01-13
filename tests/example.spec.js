// @ts-check
const { test } = require('@playwright/test');
test('Whose That Pokemon?!?!?', async ({ request }) => {
  const pokemon = await request.get(`pokemon/7`);
  let myStarterPokemon = await pokemon.json()
  console.log(myStarterPokemon.name)
});

