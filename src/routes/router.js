import { createRouter, createWebHistory } from "vue-router";
import VgDetail from "../components/VgDetail.vue";
import VgList from "../components/VgList.vue";

// 라우트 정의
const routes = [
  {
    path: '/',
    component: VgList
  },
  {
    // 세그먼트 파라미터 (아래 주소부분의 `:id`이 부분)
    // 내가 사용해야하는 데이터를 path의 한부분으로 작성하여,
    // 파라미터를 전송하는 방법
    // 세그먼트 파라미터명은 자유롭게 작성하되, 되도록 알기 쉬운 단어로 설정
    path: '/show/:id',
    component: VgDetail
  }
];

// 라우터 객체 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;