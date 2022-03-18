import { FC } from 'react'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../components/icons"
import { ProductType } from "../../types/product-type"

interface CartItemProps {
  product: ProductType
  increase: (product: ProductType) => void
  decrease: (product: ProductType) => void
  removeProduct: (product: ProductType) => void
}


export const CartItem: FC<CartItemProps> = ({ product, increase, decrease, removeProduct }) => {
  const { title, imageUrl, price, quantity } = product

  return (
    <div className='cart-item'>
      <div className='item-image'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className="name-price">
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
      <div className="quantity">
        <p> Quantity: {quantity} </p>
      </div>
      <div className="btns-container">
        <button className='btn-increase' onClick={() => increase(product)}> <PlusCircleIcon width='20px'/> </button>
        { quantity === 1 && <button className='btn-trash' onClick={() => removeProduct(product)} ><TrashIcon width='20px'/></button>}
        { quantity > 1 && <button className='btn-decrease' onClick={() => decrease(product)}><MinusCircleIcon width='20px'/></button>}
      </div>
    </div>
  )

}
