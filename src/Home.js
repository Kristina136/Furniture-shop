import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Category from "./Components/Category";
import Header from "./Components/Header";
import Items from "./Components/Items";

import Logout from "./Auth/Logout";

function Home() {
    const { isAuthenticated } = useAuth0();
    
    return <div className="Home">
    <div className="contHeader" >
      <Header />

    </div>

    <Category />
   { !isAuthenticated ?
    <Items /> :
    
    <Logout/>
    }
    
    
  </div>
  }
  
  export default Home;
  