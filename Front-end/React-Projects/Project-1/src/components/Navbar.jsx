import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-15 px-10 py-5 text-xl font-normal'>
      <NavLink className={(e)=>e.isActive ? "border-b-2 border-green-400 text-green-300" : " "} to={'/'}>Home</NavLink>
      <NavLink className={(e)=>e.isActive ? "border-b-2 border-green-400 text-green-300" : " "} to={'/recipes'}>Recipe</NavLink>
      <NavLink className={(e)=>e.isActive ? "border-b-2 border-green-400 text-green-300" : " "} to={'/about'}>About</NavLink>
      <NavLink className={(e)=>e.isActive ? "border-b-2 border-green-400 text-green-300" : " "} to={'/create-recipe'}>Create</NavLink>

    </div>
  )
}

export default Navbar