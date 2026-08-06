import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'

export default function Navbar() {

  const navigate = useNavigate()
  const token =useAuthStore((state) => state.token);
  console.log(token)
  const logout = useAuthStore( (state) => state.logout);
   const handleLogout = ()=>{
    logout();
    navigate('/login');
   }

  return (
    <nav>
    <Link to="/">HOME</Link>
    <Link to="products">Products</Link>
    { token ? <>
        <Link to="login" onClick={handleLogout}>Logout</Link>

      <Link to="cart">Cart</Link>
</> :
<>
    <Link to="register">Register</Link>
         <Link to="login">Login</Link>

</>
}
    </nav>
  )
}
