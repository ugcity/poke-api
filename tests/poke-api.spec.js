const { test } = require('@playwright/test');

test('Pokemon information', async ({ request })=> {
    const pokemon = await request.get('pokemon/squirtle');
    let pokejson = await pokemon.json();
    console.log(pokejson.moves[12].move.name);
});