<script setup>
import { ref } from 'vue';
import VgHeader from './components/VgHeader.vue';
import VgList from './components/VgList.vue';
import VgDetail from './components/VgDetail.vue';


const mainComponentList = ['VgList', 'VgDetail'];
const selectedMainComponent = ref('VgList');

function changeComponent(selectedComponent){
  selectedMainComponent.value = selectedComponent;
}
</script>

<template>
  <VgHeader />
<div class="main">
  <VgList
    :componentNameVgDetail="mainComponentList[1]"
    @changeComponent="changeComponent"
    v-if="selectedMainComponent === mainComponentList[0]"
    />
    <VgDetail 
      v-else-if="selectedMainComponent === mainComponentList[1]"
    />
</div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>