import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login =()=>{

    const { loginWithRedirect, isAuthenticated } = useAuth0();
return( !isAuthenticated &&(
    <div className="App">
         <h1>
            Log in to view our special offers.
        </h1>
        
        <button className="loginBtn" onClick={() => loginWithRedirect()}>Log in</button>
    </div>)
)
}

export default Login