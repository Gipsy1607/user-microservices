import React from 'react'
import { Link } from 'react-router-dom';
import createUser from './Create.user.jsx';
import loginForAdmin from './Login.for.admin.jsx';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <button style={{border:"none", outline: "none"}} onClick={createUser()}>Create User</button>
      <button style={{border:"none", outline: "none"}}  onClick={loginForAdmin()}>Login for Admin</button>
    </div>
  )
}

export default Navbar;
