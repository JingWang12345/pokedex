
let pokédex = new PokeCollection()
let actualPage;

loadNextPage();

PokeService.getNextPokemon().then(data => {
    fillPokemonArrayFromServer(data)
    displayPokedex()
})

function fillPokemonArrayFromServer(data) {
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        const object = data.results[i];
        const pokemon = new Pokemon(object.name)
        pokédex.addPokemon(pokemon)
    }
}

function loadNextPage() {
    PokeService.getNextPokemon(actualPage).then(pokemonPage => {
        actualPage = pokemonPage;
        console.log(actualPage);
    })
}

function loadPreviousPage() {
    PokeService.getPreviousPokemon(actualPage).then(pokemonPage=> {
        actualPage = pokemonPage;
        console.log(actualPage);
    })
}


function displayPokedex() {
    const pokemonList = document.getElementById('pokemonList');
 

    for (let i = 0; i < pokédex.pokemonArray.length; i++) {
        const pokemon = pokédex.pokemonArray[i];
        console.log(pokemon);
    }
}

