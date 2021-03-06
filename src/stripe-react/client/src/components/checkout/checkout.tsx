import { useState, useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import { Layout } from '../shared/layout'
import { ShippingAddress, FormFields } from './custom-checkout/shipping-address'
import './checkout.styles.scss'

export const Checkout = () => {
  const { itemCount, total } = useContext(CartContext)
  const [ shipping, setShipping ] = useState<FormFields | null>(null) 

  const addressShown = {
    display: (shipping ? 'none' : 'block')
  }

  
  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h4>{`Amount to Pay: $${total}`}</h4>
      </div>
      <div style={addressShown}>
        <ShippingAddress setShipping={setShipping}/>
      </div>
    </Layout>
  )
}