import { fetchCartItems } from '@/apis'

// 상수화.. 타입추론 가능
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  SET_CART_ITEMS(state, cartItems) {
    state.cartItems = cartItems
  },
  ADD_CART_ITEM(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    }
    state.cartItems.push(newCartItem)
  },
}

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }, _payload) {
    const { data } = await fetchCartItems()
    commit(
      'SET_CART_ITEMS',
      data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    )
  },
  // 예를 들어 서버 측에 세션이 있고 를 통해 연결된 사용자에 액세스할 수 있다고 가정
  // req.session.user. 인증된 사용자를 스토어에 추가하기 위해 아래와 같이 업데이트
  // actions: {
  //   nuxtServerInit ({ commit }, { req }) {
  //     if (req.session.user) {
  //       commit('user', req.session.user)
  //     }
  //   }
  // }

  // asyncData보다 이른 시점에 이미 데이터가 전부 준비된 스토어를 반환하게함
  // 해당 cart.vue에서 불러오는 시점보다 먼저 동작하기 때문에 cart.vue에서 FETCH_CART_ITEMS를 호출하지 않아도 이미 데이터가 있음
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   // SSR할 데이터가 여러개 일 수도 있기 때문에
  //   // action들을 정의해 놓으면 간편
  //   await storeContext.dispatch(FETCH_CART_ITEMS)

  //   //   const { data } = await fetchCartItems()
  //   //   storeContext.commit(
  //   //     'SET_CART_ITEMS',
  //   //     data.map((item) => ({
  //   //       ...item,
  //   //       imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  //   //     }))
  //   //   )
  // },
}
