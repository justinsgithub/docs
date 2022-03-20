import { initialState } from './cart-context'
import { ProductType } from '../types/product-type'

const storeCartItems = (cartItems: ProductType[]) => {
  const cart = cartItems.length > 0 ? cartItems : []
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const sumItems = (cartItems: Array<ProductType>) => {
  storeCartItems(cartItems)
  return {
    itemCount: cartItems.reduce( (total: number, item: ProductType) => total + item.quantity, 0),
    total: cartItems.reduce( (total: number, item: ProductType) => total + item.price * item.quantity, 0),
  }
}

type ACTIONTYPE =
  | { type: 'ADD_ITEM'; payload: ProductType }
  | { type: 'INCREASE'; payload: ProductType }
  | { type: 'DECREASE'; payload: ProductType }
  | { type: 'REMOVE_ITEM'; payload: ProductType }
  | { type: 'CLEAR' }

export const cartReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {

    case 'ADD_ITEM':
      if ( !state.cartItems.find( (item: ProductType) => item.id === action.payload.id)) {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
      return { ...state, cartItems: [...state.cartItems], ...sumItems(state.cartItems) }

    case 'INCREASE':
      const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      state.cartItems[increaseIndex].quantity++
      return { ...state, cartItems: [...state.cartItems], ...sumItems(state.cartItems) }

    case 'DECREASE':
      const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      const product = state.cartItems[decreaseIndex]
      if (product.quantity > 1) {
        product.quantity--
      }
      return { ...state, cartItems: [...state.cartItems], ...sumItems(state.cartItems) }

    case 'REMOVE_ITEM':
      const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
      return { ...state, cartItems: [...newCartItems], ...sumItems(newCartItems) }

    case 'CLEAR':
      localStorage.removeItem('cart')
      return { ...state, cartItems: [], itemCount: 0, total: 0 }

    default:
      return state
  }
}
