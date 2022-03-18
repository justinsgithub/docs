import { FC } from 'react'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons"
import { ProductType } from "../../../types/product-type"


interface CartItemProps {
  product: ProductType
}


export const CartItem: FC<CartItemProps> = ({ product }) => {
  const { title, imageUrl, price, quantity } = product

  return (
    <div className='cart-item'>
      <div className='item-image'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className="name-price">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <div className="quantity">
        <p> {`Quantity: ${quantity}`} </p>
      </div>
      <div className="btns-container">
        <button className='btn-increase'> <PlusCircleIcon width='20px'/> </button>
        { quantity === 1 && <button className='btn-trash'><TrashIcon width='20px'/></button>}
        { quantity > 1 && <button className='btn-decrease'><MinusCircleIcon width='20px'/></button>}
      </div>
    </div>
  )

}
