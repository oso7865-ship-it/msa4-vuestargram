import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBoardDetailStore = defineStore('boardDetail',() =>{
  const board = ref(null);

  async function getBoard() {
    try {
      const res = await axios.get('/data/board.json');
      board.value = res.data
    } catch (error) {
      console.error(error);
    }
  }

  return {
    board,
    getBoard,
  }
});