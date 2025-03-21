import { getAll, getByid } from '@/service/HttService';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePokeomnStore = defineStore ('pokemon', ()=>{
    const allPokemonStore = ref([])
    const uniquePokemon = ref(null);  
    const id = ref()
    async function getAllPokemon() {
        try {
            const pokemons = await getAll();
            console.log(pokemons)
            allPokemonStore.value = pokemons;
        } catch (error) {
            console.error("Erro ao buscar pokémons:", error);
        }
    }

    async function getPokemonByid(id) {
        try {
       
            const onePokemon = await getByid(id)
        
            uniquePokemon.value = onePokemon;
            
        } catch (error) {
            console.error("Erro ao buscar pokémons:", error);
        }
    }


    return {
        getPokemonByid,
        getAllPokemon,
        allPokemonStore,
        uniquePokemon,
    }
    
})