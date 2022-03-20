import { createContext, useReducer } from 'react'
import { cartReducer, sumItems } from './cart-reducer'
import { ProductType } from '../types/product-type'

interface ChildrenType {
  children: React.ReactNode
}

interface CartContextType {
  cartItems: ProductType[]
  itemCount: number
  total: number
  addProduct: (product: ProductType) => void
  increase: (product: ProductType) => void
  decrease: (product: ProductType) => void
  removeProduct: (product: ProductType) => void
  clearCart: () => void
}

const cartItems: ProductType[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : []

export const initialState: CartContextType = {
   cartItems, 
   ...sumItems(cartItems),
   addProduct: (product) => {},
   increase: (product) => {},
   decrease: (product) => {},
   removeProduct: (product) => {},
   clearCart: () => {}
  }

export const CartContext = createContext(initialState)

export const CartContextProvider = ({ children }: ChildrenType) => { 
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const addProduct = (product: ProductType) => dispatch({ type: 'ADD_ITEM', payload: product })
  const increase = (product: ProductType) => dispatch({ type: 'INCREASE', payload: product })
  const decrease = (product: ProductType) => dispatch({ type: 'DECREASE', payload: product })
  const removeProduct = (product: ProductType) => dispatch({ type: 'REMOVE_ITEM', payload: product })
  const clearCart = () => dispatch({ type: 'CLEAR'})

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    removeProduct,
    clearCart
  }

  return (
  <CartContext.Provider value = {contextValues}> 
    {children}
  </CartContext.Provider> 
  )

}
