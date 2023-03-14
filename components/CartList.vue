<template lang="">
  <div class="list-wrapper">
    <ul>
      <li
        v-for="cartItem in $store.state.cartItems"
        :key="cartItem.id"
        class="list-item"
      >
        <img :src="cartItem.imageUrl" :alt="cartItem.name" class="thumbnail" />
        <div class="description">
          <p>{{ cartItem.name }}</p>
          <span>{{ cartItem.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
// },
//
// SSR.. []로 시작하는게 아닌 이미 데이터가 있음
// 그래서 v-if같이 데이터 가드 사용 안해도 되넹..
// beforeEnter..와 비슷 함

// 만약 actions에서 nuxtServerInit로 따로 호출도 안하고
// 이렇게 컴포넌트를 분리해서 이 해당 비즈니스에 맞에 FETCH_CART_ITEMS를 불러와야하는데
// pages하위에 있어서 불러오지 못하므로 fetch속성을 사용할 수 있다.
// import { FETCH_CART_ITEMS } from '@/store'
// export default {
// 페이지 진입 전에 동작.. 컴포넌트가 생성되기 이전 시점이라 this 접근 불가
// async asyncData({ store }) {
//   await store.dispatch(FETCH_CART_ITEMS)
// },
// }

import { FETCH_CART_ITEMS } from '@/store'
// 일반 vue컴포넌트에서도 사용 가능 fetch (범용성)
// asyncData와 동일선상에서 fetch 됨

export default {
  // fetch에 파라미터가 들어오면 레거시 프로젝트임
  async fetch() {
    // 페이지에 진입한 시점.. 컴포넌트가 생성되고 난 이후 시점이기 때문에 this에 접근 가능
    // console.log(this)
    // fetch의 특성
    // 다른 페이지에서 진입시엔 이미 컴포넌트가 브라우저에 생성되었기 때문에 이 this가 객체 형태로 해당 브라우저 컴포넌트가 로그에 나오고
    // 이 해당 페이지에서 새로고침 하면 아직 브라우저에 컴포넌트가 없기 때문에 로그는 서버쪽에 생성 된 컴포넌트가 문자 형태로 출력됨 SSR
    // process.server와 process.client로 확인 가능
    if (process.server) {
      console.log('server')
      console.log(this)
    }

    if (process.client) {
      console.log('client')
      console.log(this)
    }
    await this.$store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>
<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
