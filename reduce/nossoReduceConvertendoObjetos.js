const pokemos = [
    {
        name: "Pikachu",
        type: 'eletric'
    },
    {
        name: "Squirtle",
        type: "water"
    },
    {
        name: "Magikarp",
        type: "water"
    },
    {
        name: "Charmander",
        type: "fire"
    }
];


const pokemonsPorTipo = pokemos.reduce( (pokemonsPorTipo, pokemonAtual) => {

    console.log(pokemonAtual);

    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || [];

    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual);

    return pokemonsPorTipo;
}, {});


console.log(pokemonsPorTipo.fire);