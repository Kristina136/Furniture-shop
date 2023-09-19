import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItems from "./CartItems";
import StripeContainer from "../../Stripe/StripeContainer";
import { useState } from "react";
function Cart() {
  const cartItems=useSelector(getCartItems)
  const totalPrice=useSelector(getTotalPrice)
  const [show, setShow] = useState(false)
  return (
<div>
{!show ? <div className="cartComonent">
       <p className="headerCart">YOUR ORDER</p>
    {cartItems.map((e,i)=><CartItems e={e} key={i}/>)}

    <h4>Subtotal: {totalPrice} $</h4> 
    <button className="checkoutBtn" onClick={()=>setShow(true)}>Check out</button>

    </div> : <StripeContainer totalPrice={totalPrice} /> }
    
    </div>
  );
}

export default Cart;
