<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">카트에 담기</button>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchProductById, createCartItem } from '@/apis'
export default {
  async asyncData({ params }) {
    const id = params.id
    const { data: product } = await fetchProductById(id)

    return {
      product,
    }
  },
  head: {
    title: '상세 페이지 타이틀',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '상품 상세 페이지 설명입니다.',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
      },
    ],
  },
  mounted() {
    console.log(`id: ${this.$route.params.id}`)
    console.log('product: ', this.product)
  },
  methods: {
    async addToCart() {
      const res = await createCartItem(this.product)
      console.log(res)
      this.$store.commit('ADD_CART_ITEM', this.product)
      this.$router.push(`/cart`)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
