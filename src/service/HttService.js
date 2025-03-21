import axios from "axios";
import { ref } from "vue";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getAll(limit = 386) {
    const id = ref()
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


export async function getByid(id) {
    try {
       
        if (!id) {
            console.log("Erro ao pegar id")
        }
        const response = await axios.get(`${API_URL}/${id}`);

        const onePokemon = {
            name: response.data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            id: response.data.id,
            types: response.data.types.map(type => type.type.name), // Obtendo os tipos do Pokémon
            abilities: response.data.abilities.map(ability => ability.ability.name) // Obtendo as habilidades
        };
        console.log (onePokemon)
        return onePokemon;
      
    } catch (error) {
        console.error('Error getting Pokémon:', error);
        throw error;
    }
}