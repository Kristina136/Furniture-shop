import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Offer from "../Components/Offer";
import { getSelectedCategory } from "../Redux/cartSlice";
import { useSelector } from "react-redux";
import dataOffer from "../dataOffer";

const Logout = () => {
    const { isAuthenticated } = useAuth0();
    const selectedCategory = useSelector(getSelectedCategory);
  return (
    isAuthenticated && (
<div className="App">
  
<div className="items">
    {dataOffer
        .filter((el) => {
          if (selectedCategory === "SHOW ALL") return true;
          return selectedCategory === el.category;
        })
        .map((e) => (
          <Offer e={e}  key={e.id}/>
        ))}
   </div>
    </div>
    )
  );
};

export default Logout;

