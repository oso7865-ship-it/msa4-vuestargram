<script setup>
import VgHeader from './components/VgHeader.vue';
import VgList from './components/VgList.vue';
import VgDetail from './components/VgDetail.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <VgHeader />
  <div class="main">
    <!-- RouterView: 현재 라우트 컴포넌트를 어디에 렌더링 할지 위치를 지정해주는 컴포넌트 -->
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>