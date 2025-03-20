import { getAll } from '@/service/HttService';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePokeomnStore = defineStore ('pokemon', ()=>{
    const allPokemonStore = ref([])

    async function getAllPokemon() {
        try {
            const pokemons = await getAll();
            allPokemonStore.value = pokemons;
        } catch (error) {
            console.error("Erro ao buscar pokémons:", error);
        }
    }
    return {
        getAllPokemon,
        allPokemonStore,
    }
    
})