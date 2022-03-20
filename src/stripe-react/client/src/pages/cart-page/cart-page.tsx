import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { Layout } from "../../components/shared/layout";
import { CartItem } from "./cart-item";
import { Total } from "./total";
import './cart-page.styles.scss'

export const CartPage = () => {
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart  } = useContext(CartContext)
  const functions = { increase, decrease, removeProduct}

  return (
    <Layout>
      <>
        <h1>Cart</h1> 
        { cartItems.length === 0 ? (
        <div className='empty-cart'> Your Cart is empty  </div>
         ) : (
           <>
           <div className="cart-page">
             <div className="cart-item-container">
               { cartItems.map(item => <CartItem product={item} key={item.id} { ...functions }/>)}
             </div>
            <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
           </div>
          </>
         )}
      </>
    </Layout>
  )
}