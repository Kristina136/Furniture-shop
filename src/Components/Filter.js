import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../Redux/productSlice";

function Filter({ e}) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  return (
  <div className="contFilter">
      <button
        onClick={() => {
          dispatch(filterCategory(e));
        }}
        className={
          selectedCategory === e ? "btnFilterSelected btnFilter" : "btnFilter"
        }
      >
        {e}
      </button>
    </div>
  );
}

export default Filter;
