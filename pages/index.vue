<template lang="">
  <div class="app">
    <main>
      <!-- <SearchInput
        :search-keyword="searchKeyword"
        @input="updateSearchKeyword"
      /> -->
      <SearchInput v-model="searchKeyword" @search="searchProducts" />
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
            srcset=""
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
    <!-- <ProductList /> -->
  </div>
</template>
<script>
import { fetchProducts, fetchProductByKeyword } from '@/apis'
export default {
  // asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  // },
  //
  // SSR.. []로 시작하는게 아닌 이미 데이터가 있음
  // 그래서 v-if같이 데이터 가드 사용 안해도 되넹..
  // beforeEnter..와 비슷 함
  async asyncData() {
    const res = await fetchProducts()
    const products = res.data.map((product) => {
      return {
        ...product,
        imageUrl: `${product.imageUrl}?random=${Math.random()}`,
      }
    })
    // this.products...
    return {
      products,
    }
  },
  data() {
    return {
      searchKeyword: '',
    }
  },
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`)
    },
    // updateSearchKeyword(keyword) {
    //   this.searchKeyword = keyword
    // },
    async searchProducts() {
      const res = await fetchProductByKeyword(this.searchKeyword)
      this.products = res.data.map((product) => {
        return {
          ...product,
          imageUrl: `${product.imageUrl}?random=${Math.random()}`,
        }
      })
    },
    moveToCartPage() {
      this.$router.push('/cart')
    },
  },
}
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
