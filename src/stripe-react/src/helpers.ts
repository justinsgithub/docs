import { ProductType } from './types/product-type'

export const isInCart = (product: ProductType, cartItems: Array<ProductType>) =>  {
  return cartItems.find(item => item.id === product.id)
}
