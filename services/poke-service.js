class PokeService {

    static POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

    static getNextPokemon(page) {
        if (page === undefined) {
            return fetch(this.POKE_URL).then(resp => resp.json());
        } else {
            return fetch(page.next).then(resp => resp.json());
        }

    }

    static getPreviousPokemon(page) {
        if (page === undefined || page.previous === null) {
            return fetch(this.POKE_URL).then(resp => resp.json());
        } else {
            return fetch(page.previous).then(resp => resp.json());
        }
    }

}