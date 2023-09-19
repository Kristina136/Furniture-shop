import Login from "./Login"
import Logout from "./Logout"
import { useAuth0 } from "@auth0/auth0-react";


const Auth =()=>{
    const { isLoading } = useAuth0();
 if (isLoading) {
    return <div>Loading ...</div>;
  }
return( 
    <div>
       
        <Login/>
        <Logout/>
    </div>
)
}

export default Auth