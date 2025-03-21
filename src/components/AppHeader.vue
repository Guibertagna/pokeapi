<template>
    <div class="pokedex-header">
      <div class="pokeball-light"></div>
     
      <img :src="logo" class="pokedex-title">
      <div class="small-lights">
        <div class="small-light red"></div>
        <div class="small-light yellow"></div>
        <div class="small-light green"></div>
      </div>
    </div>

</template>

<script setup>
import logo from "@/assets/Pokedex.webp";
</script>

<style scoped>

.pokedex-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background-color: #e51c23;
}


.small-lights {
  display: flex;
  gap: 10px;
}

.small-light {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.small-light.red {
  background-color: #ff5252;
}

.small-light.yellow {
  background-color: #ffeb3b;
}

.small-light.green {
  background-color: #4caf50;
}

.pokedex-title {
 

width: 250px;
}
</style>