import { FC } from 'react';
import { useNavigate } from "react-router-dom";
import { Layout } from "../../shared/layout";

export const Canceled: FC = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className="checkout">
        <h1>Payment Error</h1>
        <p>Payment was not successful, try again later</p>
        <div>
          <button className='button is-black nomad-btn submit' onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  )
}
