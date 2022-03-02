import { useContext } from 'react'
import { ProductsContext } from '../../context/products-context'
import FeaturedProduct from '../shared/featured-product'
import { ProductType } from '../../types/product-type'

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext)
  const productItems = products.filter((product: ProductType) => product.id < 4)
  const featuredProducts = productItems.map((product: ProductType) => <FeaturedProduct {...product} key={product.id}/>)

  return (
    <div className='featured-collection container'>
      <h2 className='featured-collection-title'> Featured Collection </h2>
      <div className='products'>
        { featuredProducts }
      </div>
    </div>
  )
}

export default FeaturedCollection
