<script setup>
import { useCounterStore } from '../stores/useCounterStore';


const counterStore = useCounterStore();
</script>

<template>
  <div class="header">
    <h1>Vuegram {{ counterStore.cnt }}</h1>
    <div class="header-btn-box">
      <button type="button" class="btn btn-small btn-gray">Sign In</button>
      <button type="button" class="btn btn-small btn-white">Sign Up</button>
    </div>
  </div>
  <hr>
</template>

<style scoped>
.header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.header-btn-box{
  display: flex;
  gap: 10px;
}
</style>