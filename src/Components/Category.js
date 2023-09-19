import Filter from "./Filter";
// import { LuSofa } from "react-icons/lu";
// import { GiTable } from "react-icons/gi";
// import { BiBed } from "react-icons/bi";
// import { PiArmchairBold } from "react-icons/pi";

function Category() {
    return (
    <div className="contFilter">

        {["SOFAS", "DINING SETS", "BEDS", "CHAIRS", "SHOW ALL"].map(
            (e, i)=> <Filter e={e} key={i}/>)
        }
      
    </div>
    )
  }
  
  export default Category;