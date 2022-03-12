import * as React from 'react'
import { createContext, useReducer } from 'react'
import { cartReducer } from './cart-reducer'
import { ProductType } from '../types/product-type'

interface ChildrenType {
  children: React.ReactNode
}

interface CartContextType {
  cartItems: Array<ProductType>;
  itemCount: number;
  total: number;
}

export const initialState: any = { cartItems: [], itemCount: 0, total: 0}

export const CartContext = createContext(initialState)

export const CartContextProvider = ({ children }: ChildrenType) => { 
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const addProduct = (product: ProductType) => dispatch({ type: 'ADD_ITEM', payload: product })

  return (
    <CartContext.Provider value ={{ ...state, addProduct }}> 
    {children}
  </CartContext.Provider> 
  )

}
