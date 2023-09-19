import { useState } from "react";
import Buy from "./Buy";
import { BiCartDownload } from "react-icons/bi";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

function Offer({e}) {
  const [push, setPush] = useState(false);
  const [pushFav, setPushFav] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();


const add=()=>{
  dispatch(addToCart({ e, quantity }))
  setPush(true)
}
const changeColor=()=>{
  setPushFav(true)
}

  return (
    <div className="itemEach">
      <img className="eachImg" src={`./${e.img}.jpg`} width="400px" height="300px" alt="alt" />
      <MdOutlineFavorite onClick={changeColor} className={pushFav ? "eachHeartPushed eachHeart": "eachHeart"} size={40} color="#69696b" />
      <p>{e.name}</p>
      <p>{e.category}</p>
      <p className="oldPrice">{e.oldPrice} $</p>
      <p className="newPrice">{e.price} $</p>
      <Buy quantity={quantity} setQuantity={setQuantity} />
      {push ? <AiOutlineCheckSquare size={30}/> :  <BiCartDownload onClick={add} size={30}/>}
      

    
    </div>
  );
}

export default Offer;
