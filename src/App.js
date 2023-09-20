import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import { GiShoppingBag } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import Cart from "./Components/Cart/Cart";
import Auth from "./Auth/Auth";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2'


function App() {
  const { logout, isAuthenticated } = useAuth0();
 const logoutFunc=()=>{

  Swal.fire({
    title: 'Are you sure you want to leave?',
    text: "If you leave, you can not see our special offers.",
   
    showCancelButton: true,
    confirmButtonColor: '#69696b',
    cancelButtonColor: '#9c867b',
    confirmButtonText: 'Log out!'
  }).then((result) => {
    if (result.isConfirmed) {
      logout()
      Swal.fire(
        'Log out success!',
        'success'
      )
    }
  })


 
 }
  return (
    <Router>
    <nav className=" contHeader">
      <Link to="/" className='link header' style={{textDecoration:"none"}}>   <h1>INMYROOM</h1></Link>
      <div className="cart">
      <Link to="/Cart" className='link' style={{textDecoration:"none"}}> <GiShoppingBag size={40} color="#69696b" /></Link>
      { !isAuthenticated ?
      <Link to="/Auth" className='link' style={{textDecoration:"none"}}> 
         <BsFillPersonFill size={40} color="#69696b"/>
          </Link>
         
         : 
         <Link to="/" className='link' style={{textDecoration:"none"}}> 
        <BiLogOutCircle onClick={logoutFunc} size={40} color="#69696b"/>
        </Link>
        }
         
        

      </div>


     
    
    </nav>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Cart' element={<Cart/>}/>
    { !isAuthenticated ?
     <Route path='/Auth' element={<Auth/>}/>
     :
 <Route path='/' />
  }
   
   
    
     </Routes>
      </Router>
    
  );
}

export default App;
