// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/cartSlice";
import data from "../../data";
import {MdDeleteOutline} from 'react-icons/md'
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import dataOffer from "../../dataOffer";

function CartItems({e}) {
   const { isAuthenticated } = useAuth0();
 const dispatch= useDispatch()

 const product= data.find(item=>{
    return item.id===e.itemId
 })

 const productOffer= dataOffer.find(item=>{
   return item.id===e.itemId
})

    return (
    
    !isAuthenticated ?
    
    <div className="cartItem">
        <img className="cartImg" src={`./${product.img}.jpg`} alt="alt" />
      <p className="nameCont">{product.name}</p>  
<p>{e.quantity} item</p>
<p>{e.quantity * product.price} $</p>
<MdDeleteOutline onClick={()=>dispatch(removeFromCart({cartItemId: e.id}))}  size={30} color="#69696b"/>
    </div>

    :
    <div className="cartItem">
    <img className="cartImg" src={`./${productOffer.img}.jpg`} alt="alt" />
  <p className="nameCont">{productOffer.name}</p>  
<p>{e.quantity} item</p>
<div>
   <p className="oldPrice">{e.quantity * productOffer.oldPrice} $</p>
   <p>{e.quantity * productOffer.price} $</p>
   </div>

<MdDeleteOutline onClick={()=>dispatch(removeFromCart({cartItemId: e.id}))}  size={30} color="#69696b"/>
</div>

    )
  }
  
  export default CartItems;
  