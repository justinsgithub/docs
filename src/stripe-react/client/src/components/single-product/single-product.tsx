import { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ProductsContext } from "../../context/products-context";
import { CartContext } from "../../context/cart-context";
import { isInCart } from '../../helpers';
import Layout from '../shared/layout'
import './single-product.styles.scss'
import { ProductType } from '../../types/product-type'

const SingleProduct = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { products } = useContext(ProductsContext)
  const { addProduct, increase, cartItems } = useContext(CartContext)
  const id = params.id
  const [product, setProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    const product = products.find((item:any) => Number(item.id) === Number(id))

    if (!product) {
      navigate('/shop')
      return
    } 

    setProduct(product)

  }, [id, product, navigate, products])

  if (!product) return null

  const inCart = isInCart(product, cartItems)

  return (
    <Layout>
      <div className='single-product-container'>
        <div className='product-image'>
          <img src={product.imageUrl} alt='coffee'/>
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{product.title}</h3>
            <p>$ {product.price}</p>
          </div>
          <div className='add-to-cart-btns'>
            {!inCart ? (
            <button className='button is-white nomad-btn' id="btn-white-outline" onClick={() => addProduct(product)}>ADD TO CART</button>
            ) : (
            <button className='button is-white nomad-btn black-outline' onClick={() => increase(product)}>ADD MORE</button>
            )}
            <button className='button is-black nomad-btn'>PROCEED TO CHECKOUT</button>
          </div>
          <div className='product-description'>
            <p>
              { product.description }
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleProduct
