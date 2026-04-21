<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';

const boardList = ref([]);

onBeforeMount(getBoardList);

async function getBoardList() {
    try {
    const res = await axios.get('/data/boards.json');
    console.log(res);
    boardList.value.push(...res.data);
  } catch (error) {
    console.error(error);
  }
};

const props = defineProps({
  'componentNameVgDetail': String,
})
const emit = defineEmits(['changeComponent']);
</script>

<template>
  <div class="container">
    <div 
    class="card" 
    v-for="item in boardList"
    :key="item.id"
    :style="{backgroundImage: `url('${item.img}')`}"
    @click="emit('changeComponent', props.componentNameVgDetail)"
    ></div>
  </div>
  <button type="button" class="btn btn-gray btn-big" @click="getBoardList">Show more posts form kanna_kamui</button>
</template>

<style scoped>
.container{
  width: 100%;
  padding: 10px 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px,1fr));
  gap: 10px;
  
}
.card {
  border-radius: 15px;
  padding-top: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>