import { ProductType } from './types/product-type'

export const isInCart = (product: ProductType, cartItems: Array<ProductType>) =>  {
  return cartItems.find(item => item.id === product.id)
}

const API = process.env.REACT_APP_API

interface ProductData {
  name: string
  description: string
  images: string[]
}

interface PriceData {
  currency: string
  unit_amount: number
  product_data: ProductData
}

interface LineItem {
  quantity: number
  price_data: PriceData
}

interface StripeData {
  line_items: LineItem[]
  customer_email: string
}

interface Options {
  method: string
  body: StripeData | null
}

export const fetchFromAPI = async(endpoint: string, options: Options = { method: 'POST', body: null } ) => {

  const response = await fetch(`${API}/${endpoint}`, { 
    method: options.method, 
    body: options.body && JSON.stringify(options.body),
    headers: { 'Content-Type': 'application/json'},   
  })

  return response.json()
}