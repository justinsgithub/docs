import { FC, useState, useContext, FormEvent } from 'react';
import { useStripe } from '@stripe/react-stripe-js'
import { CartContext } from '../../../context/cart-context';
import { fetchFromAPI } from '../../../helpers';


export const StripeCheckout = () => {

  const [customer_email, setCustomerEmail] = useState('')
  const { cartItems } = useContext(CartContext)
  const stripe = useStripe()

  const handleGuestCheckout = async(e: FormEvent) => {
    e.preventDefault()
    const line_items = cartItems.map(item => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item.price * 100, // convert amount to cents
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl],
          }
        }
      }
    })

    const options = {
      method: 'POST',
      body: { line_items, customer_email }
    }

    const response = await fetchFromAPI('create-checkout-session', options)

    console.log(response)

    const { sessionId } = await response
    
    console.log(sessionId)

    const error = await stripe?.redirectToCheckout({sessionId})

    if (error?.error) {
      console.log(error.error)
    }
  }

  return (
    <form onSubmit={e => handleGuestCheckout(e)}>
      <div>
        <input type="email" onChange={e => setCustomerEmail(e.target.value)} placeholder='Email' value={customer_email} className='nomad-input'/>
      </div>
      <div className='submit-btn'>
        <button type='submit' className='button is-black nomad-btn submit'>
          Checkout
        </button>
      </div>
    </form>
  )
}