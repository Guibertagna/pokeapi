<template>
    <div class="back">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <router-link to="/" class="back-button">
        <span class="material-icons">arrow_back</span>
      </router-link>
    </div>
<div v-if="!loading && pokestore.uniquePokemon" class="pokemon-detail"> 
    <div class="pokemon-card">
        <div class="pokemon-header" :class="getMainTypeClass(pokestore.uniquePokemon.types[0])">
          <div class="pokemon-id">#{{ pokestore.uniquePokemon.id }}</div>
          <h1 class="pokemon-name">{{ pokestore.uniquePokemon.name }}</h1>
          <div class="pokemon-types">
            <span 
              v-for="(type, index) in pokestore.uniquePokemon.types" 
              :key="index"
              class="type-badge"
              :class="getTypeClass(type)"
            >
              {{ type }}
            </span>
          </div>
        </div>
        
        <div class="pokemon-image-container">
          <img
            :src="pokestore.uniquePokemon.image"
            class="pokemon-image"
          />
        </div>
        
        <div class="pokemon-info">
          
          <div class="info-section">
            <h2 class="section-title">Habilidades</h2>
            <div class="abilities-list">
              <div 
                v-for="(ability, index) in pokestore.uniquePokemon.abilities" 
                :key="index"
                class="ability-item"
              >
                {{ ability }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="loading-container">
      <div class="loading"></div>
      <div class="loading">
        <img src= "../assets/gifPoke.gif"  alt="loading..." class="loading-gif" >
      </div>
      <p>loading Pokémon...</p>
    </div>
  </template>
  <script setup>
  import { usePokeomnStore } from '@/stores/pokeStore';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  const loading = ref(true);
  const pokestore = usePokeomnStore();
  const route = useRoute();
  
  onMounted(() => {
  const idPoke = route.params.id;
  if (idPoke) {
    pokestore.getPokemonByid(idPoke).finally(() => {
      setTimeout(() => {
        loading.value = false;
      }, 2000); //simulando delay da api
    });
  }
});


  function getTypeClass(type) {
  return `type-${type.toLowerCase()}`;
}

function getMainTypeClass(type) {
  return `type-bg-${type.toLowerCase()}`;
}


  </script>
<style scoped>
.pokemon-detail {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
.pokemon-card {
  background-color: white;
  border-radius: 20px;
}

.pokemon-header {
  padding: 30px 20px;
  text-align: center;
  border-top-left-radius: 20px;  
  border-top-right-radius: 20px; 
  color: white;
}

.pokemon-id {
  
  top: 20px;
  right: 20px;
  font-weight: bold;
 font-size: 30px;
}
.loading-gif {
  width: 50px; 
  height: 50px; 
  margin-bottom: 10px;  
}
.pokemon-name {
  font-size: 36px;
  margin: 0 0 15px;
  text-transform: capitalize;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.pokemon-types {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.type-badge {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.pokemon-image-container {
  display: flex;
  justify-content: center;
  margin-top: -60px;
  z-index: 2;
}

.pokemon-image {
  width: 200px;
  height: 200px;
  margin-top: 50px;
  transition: transform 0.3s ease;
}
.pokemon-image:hover {
  transform: scale(1.1);
}

.info-section {
  padding: 20px;
}

.section-title {
  font-size: 20px;
  margin: 0 0 15px;
  color: #333;
  padding-bottom: 8px;
}

.abilities-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.loading-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 70vh;
}
.ability-item {
  background-color: #f0f0f0;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 14px;
  text-transform: capitalize;
  color: #333;
}
.back {
  display: flex;
  justify-content: flex-start;
  width: 100%; 
}
.type-normal { background-color: #A8A77A; }
.type-fire { background-color: #EE8130; }
.type-water { background-color: #6390F0; }
.type-electric { background-color: #F7D02C; }
.type-grass { background-color: #7AC74C; }
.type-ice { background-color: #96D9D6; }
.type-fighting { background-color: #C22E28; }
.type-poison { background-color: #A33EA1; }
.type-ground { background-color: #E2BF65; }
.type-flying { background-color: #A98FF3; }
.type-psychic { background-color: #F95587; }
.type-bug { background-color: #A6B91A; }
.type-rock { background-color: #B6A136; }
.type-ghost { background-color: #735797; }
.type-dragon { background-color: #6F35FC; }
.type-dark { background-color: #705746; }
.type-steel { background-color: #B7B7CE; }
.type-fairy { background-color: #D685AD; }


.type-bg-normal { background: #A8A77A; }
.type-bg-fire { background: #EE8130; }
.type-bg-water { background: #6390F0; }
.type-bg-electric { background: #F7D02C; }
.type-bg-grass { background: #7AC74C; }
.type-bg-ice { background: #96D9D6; }
.type-bg-fighting { background: #C22E28; }
.type-bg-poison { background: #A33EA1; }
.type-bg-ground { background: #E2BF65; }
.type-bg-flying { background: #A98FF3; }
.type-bg-psychic { background: #F95587; }
.type-bg-bug { background: #A6B91A; }
.type-bg-rock { background: #B6A136; }
.type-bg-ghost { background: #735797; }
.type-bg-dragon { background: #6F35FC; }
.type-bg-dark { background: #705746; }
.type-bg-steel { background: #B7B7CE; }
.type-bg-fairy { background: #D685AD; }
</style>
  