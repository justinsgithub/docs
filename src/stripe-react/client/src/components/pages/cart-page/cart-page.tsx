import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../shared/layout";
import { CartItem } from "./cart-item";
import './cart-page.styles.scss'

export const CartPage = () => {
  const { cartItems, itemCount, total  } = useContext(CartContext)

  return (
    <Layout>
      <>
        <h1>Cart</h1> 
        { cartItems.length === 0 ? (
        <div className='empty-cart'> Your Cart is empty  </div>
         ) : (
           <div className="cart-page">
             <div className="cart-item-container">
               { cartItems.map(item => <CartItem product={item} key={item.id}/>)}
             </div>
           </div>
         )}
      </>
    </Layout>
  )
}