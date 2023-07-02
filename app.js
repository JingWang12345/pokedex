
let pokedex = new PokeCollection()
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
        pokedex.addPokemon(pokemon)
    }
}

function loadNextPage() {
    PokeService.getNextPokemon(actualPage).then(pokemonPage => {
        actualPage = pokemonPage;
        fillPokemonArrayFromServer(pokemonPage)
        displayPokedex()
    })
}

function loadPreviousPage() {
    PokeService.getPreviousPokemon(actualPage).then(pokemonPage=> {
        actualPage = pokemonPage;
        fillPokemonArrayFromServer(pokemonPage)
        displayPokedex()
    })
}


function displayPokedex() {

    const pokemonList = document.getElementById('pokemonList');
    pokemonList.innerHTML = '';
    

    for (let i = 0; i < pokedex.pokemonArray.length; i++) {
        const pokemon = pokedex.pokemonArray[i]; 
        
        // const pokeListElement = document.createElement('li');

        // const pokeNameH3 = document.createElement('h3');

        // const nameNode = document.createTextNode(pokemon.name);

        // pokeNameH3.appendChild(nameNode);

        // pokeListElement.appendChild(pokeNameH3);

        // pokemonList.appendChild(pokeListElement);

        const htmlString = `<li><h3>${pokemon.name}</h3></li>`

        pokemonList.innerHTML += htmlString;
       
    }
}

