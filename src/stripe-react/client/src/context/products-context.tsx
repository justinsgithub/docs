import { createContext, useState } from 'react'
import SHOP_DATA from '../shop'

export const ProductsContext = createContext({products: SHOP_DATA})

const ProductsContextProvider = ({ children }: any) => {
  const [products] = useState(SHOP_DATA)

  return (
  <ProductsContext.Provider value={{ products }}>
    { children }
  </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
