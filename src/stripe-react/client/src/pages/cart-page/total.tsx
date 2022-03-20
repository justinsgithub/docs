import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

interface TotalProps {
  itemCount: number
  total: number
  clearCart: () => void
}

export const Total: FC<TotalProps> = ({ itemCount, total, clearCart}) => {
  const navigate = useNavigate()

  return (
    <div className="total-container">
      <div className="total" style={{ textAlign: 'center', marginBottom: '25px'}}>
        <p>Total Items: {itemCount}</p>
        <p>Total: ${total}</p>
      </div>
      <div className="checkout">
        <button className="button is-black" onClick={() => navigate('/checkout') }>CHECKOUT</button>
        <button className='button is-white' onClick={() => clearCart()}>CLEAR</button>
      </div>
    </div>
  )
}