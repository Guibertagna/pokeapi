import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getAll(limit = 386) {
    try {
        const response = await axios.get(`${API_URL}?limit=${limit}&offset=0`);
        const pokemons = response.data.results.map(pokemon => {
            const id = pokemon.url.split("/").filter(Boolean).pop();

            return {
                name: pokemon.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                id: id,
                url: pokemon.url
            };
        });
        console.log(pokemons);
        return pokemons;
    } catch (error) {
        console.error('Error getting all Pokémon:', error);
        throw error;
    }
}
