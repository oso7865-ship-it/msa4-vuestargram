<script setup>
import axios from 'axios';
import { onBeforeMount, reactive, ref } from 'vue';

const board = ref(null);

onBeforeMount(async () => {
  try {
    const res = await axios.get('/data/board.json');
    board.value = res.data;
    console.log(res);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <!--
    `v-if="board"` 사용 이유: 데이터가 없는 상태에서 랜더링시, 에러 발생 가능성이 있어서
    데이터가 있을때만 렌더링 하도록 유도하기위해 사용 
  -->
  <div class="container" v-if="board">
    <div class="img" :style="{backgroundImage: `url('${board.img}')`}"></div>
    <span class="author">작성자: {{ board?.writer}}</span>
    <span class="content">{{ board?.content}}</span>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
}

.img {
  padding-top: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.content {
  font-weight: 900;
  font-size: 20px;
}
</style>