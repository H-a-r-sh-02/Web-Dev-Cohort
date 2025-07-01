import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-10 py-2'> 
      <NavLink className={(e)=> (e.isActive ? "text-pink-300" : "")} to="/" >Home</NavLink>
      <NavLink className={(e)=> (e.isActive ? "text-pink-300" : "")} to="/about" >About</NavLink>
      <NavLink className={(e)=> (e.isActive ? "text-pink-300" : "")} to="/service" >Service</NavLink>
      <NavLink className={(e)=> (e.isActive ? "text-pink-300" : "")} to="/product" >Product</NavLink>
    </div>
  )
}

export default Nav