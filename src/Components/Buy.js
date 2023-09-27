

function Buy({quantity, setQuantity}) {

const addQuantity=()=>{
    const newQuantity= quantity+1
    setQuantity(newQuantity)
}
const removeQuantity=()=>{
    const newQuantity= quantity-1
    if(newQuantity<1)return
    setQuantity(newQuantity)
}


    return <div className="">
<div className="contBtn">
<button onClick={removeQuantity} className="btn">-</button>
<p>{quantity}</p>
<button onClick={addQuantity} className="btn">+</button>
</div>


    </div>
  }
  
  export default Buy;
  
