import { createContext, ReactNode, useState } from 'react'
import SHOP_DATA from '../shop'

export const ProductsContext = createContext({products: SHOP_DATA})


interface ProductsContextProviderProps {
  children: ReactNode
}

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
  const [products] = useState(SHOP_DATA)

  return (
  <ProductsContext.Provider value={{ products }}>
    { children }
  </ProductsContext.Provider>
  )
}