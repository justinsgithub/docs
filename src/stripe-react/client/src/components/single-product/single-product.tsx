import { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ProductsContext } from "../../context/products-context";
import Layout from '../shared/layout'
import './single-product.styles.scss'
import { ProductType } from '../../types/product-type'

const SingleProduct = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { products } = useContext(ProductsContext)
  const id = params.id
  const [product, setProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    const product = products.find((item:any) => Number(item.id) === Number(id))

    // if product does not exist, redirect user back to shop page
    if (!product) {
      navigate('/shop')
      return
    } 

    setProduct(product)

  }, [id, product, navigate, products])

  if (!product) return null

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
            <button className='button is-white nomad-btn'>ADD TO CART</button>
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
