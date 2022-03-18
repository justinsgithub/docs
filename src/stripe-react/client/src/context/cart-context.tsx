import { createContext, useReducer } from 'react'
import { cartReducer } from './cart-reducer'
import { ProductType } from '../types/product-type'

interface ChildrenType {
  children: React.ReactNode
}

interface CartContextType {
  cartItems: Array<ProductType>
  itemCount: number
  total: number
  addProduct: (product: ProductType) => void
  increase: (product: ProductType) => void
}

export const initialState: CartContextType = {
   cartItems: [], 
   itemCount: 0, 
   total: 0, 
   addProduct: (product) => {},
   increase: (product) => {}
  }

export const CartContext = createContext(initialState)

export const CartContextProvider = ({ children }: ChildrenType) => { 
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const addProduct = (product: ProductType) => dispatch({ type: 'ADD_ITEM', payload: product })
  const increase = (product: ProductType) => dispatch({ type: 'INCREASE', payload: product })

  const contextValues = {
    ...state,
    addProduct,
    increase
  }

  return (
  <CartContext.Provider value = {contextValues}> 
    {children}
  </CartContext.Provider> 
  )

}
