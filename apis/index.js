import axios from 'axios'
import { v4 as uuid } from 'uuid'
const instance = axios.create({
  baseURL: process.env.BASE_URL,
})

/********************************
 * products
 ********************************/

function fetchProducts() {
  return instance.get('/products')
}

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  })
}

/********************************
 * cart
 ********************************/

function fetchCartItems() {
  return instance.get('/carts')
}

function createCartItem(cartItem) {
  return instance.post('/carts', {
    ...cartItem,
    id: uuid(),
  })
}

export {
  fetchProducts,
  fetchProductById,
  fetchProductByKeyword,
  createCartItem,
  fetchCartItems,
}
