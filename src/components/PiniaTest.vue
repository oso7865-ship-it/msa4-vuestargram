<script setup>
import { useCounterStore } from '../stores/useCounterStore.js';

const CounterStore = useCounterStore();
</script>

<template>
  <h1>피니아 테스트 {{ CounterStore.cnt }}</h1>
  <h1>카운트 게터 {{ CounterStore.getOnePlustCnt }}</h1>

  <button type="button" @click="CounterStore.addCnt(90)">액션</button>
</template>

<style scoped>

</style>