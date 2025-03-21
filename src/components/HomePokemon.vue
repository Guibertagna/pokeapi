<script setup>
import router from "@/router";
import { usePokeomnStore } from "@/stores/pokeStore";
import { onMounted, ref, computed } from "vue";

const pokeStore = usePokeomnStore();

const allPokes = ref([]);  
const searchQuery = ref("");  
const selectedTab = ref('first'); 
const first = ref ([])
const second = ref([])
const third = ref([])
function goToDetails (id){
  router.push(`/details/${id}`)
} 




onMounted(async () => {
    
    await pokeStore.getAllPokemon();
    allPokes.value = pokeStore.allPokemonStore;
    first.value = pokeStore.allPokemonStore.slice(0, 151);   
    second.value = pokeStore.allPokemonStore.slice(151, 251); 
    third.value = pokeStore.allPokemonStore.slice(251, 386);  

    
});


</script>

<template>
  <div class="home-container">
    <div class="tabs">
      <span
        @click="selectedTab = 'first'"
        :class="{ active: selectedTab === 'first' }"
        >Kanto</span
      >
      <span
      @click="selectedTab = 'second'"
        :class="{ active: selectedTab === 'second' }"
        >Johto</span
      >
      <span
      @click="selectedTab = 'third'"
        :class="{ active: selectedTab === 'third' }"
        >Hoenn</span
      >
    </div>
    
    <div class="generation-title">
      <h2 v-if="selectedTab === 'first'">Kanto Region (Gen I)</h2>
      <h2 v-if="selectedTab === 'second'">Johto Region (Gen II)</h2>
      <h2 v-if="selectedTab === 'third'">Hoenn Region (Gen III)</h2>
    </div>

    <div class="poke-list" v-if="selectedTab === 'first'">
      <div class="poke-card" v-for="poke in first" :key="poke.id" @click="goToDetails(poke.id)">
        <img :src="poke.image" class="poke-img" />
    <h3 class="poke-id">#{{ poke.id }}</h3>
    <h3 class="poke-name">{{ poke.name }}</h3>
      </div>
    </div>
    <div class="poke-list" v-if="selectedTab === 'second'">
  <div class="poke-card" v-for="poke in second" :key="poke.id" @click="goToDetails(poke.id)">
    <img :src="poke.image" class="poke-img" />
    <h3 class="poke-id">#{{ poke.id }}</h3>
    <h3 class="poke-name">{{ poke.name }}</h3>

  </div>
</div>

    <div class="poke-list" v-if="selectedTab === 'third'">
      <div class="poke-card" v-for="poke in third" :key="poke.id" @click="goToDetails(poke.id)">
        <img :src="poke.image" class="poke-img" />
    <h3 class="poke-id">#{{ poke.id }}</h3>
    <h3 class="poke-name">{{ poke.name }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  padding: 20px;
}
.poke-img{
    width: 130px;
}
.search-input {
  padding: 10px;
  margin-bottom: 20px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.poke-card {
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 200px;
    height: 250px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.poke-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
}

.poke-img {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.poke-id {
    font-size: 14px;
    color: #555;
    margin-top: 10px;
}

.poke-name {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-transform: capitalize;
}

.poke-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    justify-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 1rem;
}

.tabs {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
}

.tabs span {
    font-size: 1.1rem;
    font-weight: 500;
    color: #05078b;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0 0 5px 5px;
    transition: background-color 0.3s, color 0.3s;
}

.tabs span:hover,
.tabs span.active {
    background-color: #dd1818;
    color: white;
}

</style>
