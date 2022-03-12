import { useContext } from 'react'
import { isInCart } from '../../helpers';
import { CartContext } from '../../context/cart-context';
import './featured-product.styles.scss'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../../types/product-type';


const FeaturedProduct = (product: ProductType) => {
  const navigate = useNavigate()
  const { title, imageUrl, price, id, description} = product;
  const { addProduct, cartItems } = useContext(CartContext)

  return (
  <div className='featured-product'>
      <div className='featured-image' onClick={() => navigate(`/product/${id}`)}>
        <img src={imageUrl} alt="featured product" />
    </div>
    <div className='name-price'>
      <h3>{title}</h3>
      <p>$ {price}</p>
      <button className="button is-black nomad-btn">ADD TO CART</button>
    </div>
  </div>
  )
}

export default FeaturedProduct
