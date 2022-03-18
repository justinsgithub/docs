import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

interface TotalProps {
  itemCount: number
  total: number
}

export const Total: FC<TotalProps> = ({ itemCount, total}) => {
  const navigate = useNavigate()

  return (
    <div className="total-container">
      <div className="total" style={{ textAlign: 'center', marginBottom: '25px'}}>
        <p>Total Items: {itemCount}</p>
        <p>Total: ${total}</p>
      </div>
      <div className="checkout">
        <button className="button is-black" onClick={() => navigate('/checkout') }>CHECKOUT</button>
        <button className='button is-white' onClick={() => {}}>CLEAR</button>
      </div>
    </div>
  )
}