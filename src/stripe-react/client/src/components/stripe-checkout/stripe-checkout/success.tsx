import { FC, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../../shared/layout'
import { CartContext } from '../../../context/cart-context';

export const Success: FC = () => {
  const { clearCart, cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (cartItems.length !== 0) {clearCart()}
  }, [clearCart, cartItems.length])

  return (
    <Layout>
    <div>
      <h1>Thank you for the coffee!</h1>
      <p style={{textAlign: 'center', margin: '50px'}}>Currently processing order and will send confirmation email shortly😊</p>
      <div  style={{margin: 'auto', width: '200px'}}>
        <button className='button is-black nomad-btn submit' onClick={() => navigate('/shop')}>
          Continue Shopping
        </button>
      </div>
    </div>
    </Layout>
  )
}