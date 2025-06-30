import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-10 py-2'> 
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/service" >Service</Link>
      <Link to="/product" >Product</Link>
    </div>
  )
}

export default Nav