<template lang="">
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <CartList />
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>
<script>
// import { FETCH_CART_ITEMS } from '@/store'
export default {
  // async asyncData({ store }) {
  //   await store.dispatch(FETCH_CART_ITEMS)
  // },
}
</script>
<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
</style>
