class PokeCollection{
    constructor(pokemonArray = []){

        this.pokemonArray= pokemonArray
    }
    addPokemon(pokemon){
        this.pokemonArray.push(pokemon)
    }
}