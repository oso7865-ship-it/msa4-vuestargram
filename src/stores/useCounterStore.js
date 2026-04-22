import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  // State
  const cnt = ref(0);

  // Getters : State를 기반으로 계산된 파생 데이터
  // 원본 데이터는 유지하고, 읽기전용으로 가공된 결과 값을 가져오고 싶을 때,
  const getOnePlustCnt = computed(()=> cnt.value + 1);

  // Actions: State를 변경하거나 비지니스 로직처리를 담당하는 메소드
  //    동기/비동기 로직을 모두 포함 가능
  function addCnt(num) {
    cnt.value += num;
  }

  return {
    cnt,
    getOnePlustCnt,
    addCnt,
  }
});