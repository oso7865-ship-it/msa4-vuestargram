<script setup>
import axios from 'axios';
import { onBeforeMount, reactive, ref } from 'vue';

const board = ref({});

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
  <div class="container">
    <div class="img" style="background-image: url('/dev/osoi.jpg');"></div>
    <span class="author">작성자: 둘둘</span>
    <span class="content">내용내용</span>
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