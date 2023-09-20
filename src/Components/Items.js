import { useSelector } from "react-redux";
import data from "../data";
import Item from "./Item";
import { getSelectedCategory } from "../Redux/productSlice";

function Items() {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div className="items">
      {data
        .filter((el) => {
          if (selectedCategory === "SHOW ALL") return true;
          return selectedCategory === el.category;
        })
        .map((e) => (
          <Item e={e} key={e.id}/>
        ))}
    </div>
  );
}

export default Items;
