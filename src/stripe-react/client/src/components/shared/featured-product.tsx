import { useContext } from 'react'
import { isInCart } from '../../helpers';
import { CartContext } from '../../context/cart-context';
import './featured-product.styles.scss'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../../types/product-type';


const FeaturedProduct = (product: ProductType) => {
  const navigate = useNavigate()
  const { title, imageUrl, price, id, description} = product;
  const { addProduct, increase, cartItems } = useContext(CartContext)

  const inCart = isInCart(product, cartItems)

  return (
  <div className='featured-product'>
      <div className='featured-image' onClick={() => navigate(`/product/${id}`)}>
        <img src={imageUrl} alt="featured product" />
    </div>
    <div className='name-price'>
      <h3>{title}</h3>
      <p>$ {price}</p>
      {!inCart ? ( 
      <button className="button is-black nomad-btn" onClick={() => addProduct(product)}>ADD TO CART</button>
      ) : (
      <button className="button is-white nomad-btn" id='btn-white-outline' onClick={() => increase(product)}>ADD MORE</button>
      ) }
    </div>
  </div>
  )
}

export default FeaturedProduct
