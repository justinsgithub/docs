import { initialState } from './cart-context'
import { ProductType } from '../types/product-type'

export const sumItems = (cartItems: Array<ProductType>) => {
  return {
    itemCount: cartItems.reduce( (total: number, item: ProductType) => total + item.quantity, 0),
    total: cartItems.reduce( (total: number, item: ProductType) => total + item.price * item.quantity, 0),
  }
}

type ACTIONTYPE =
  | { type: 'ADD_ITEM'; payload: ProductType }
  | { type: 'INCREASE'; payload: ProductType }

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

    default:
      return state
  }
}
