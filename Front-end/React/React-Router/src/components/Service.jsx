import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Service = () => {
      const navigate = useNavigate();
      
  return (
    <div className='p-10'>
      <h1 className='text-5xl font-thin mb-10'>Services</h1>
      <button onClick={()=>navigate("/service/details")} className='text-black bg-white text-lg font-medium px-4 py-1 rounded mr-4'>Details</button>
      <button onClick={()=>navigate("/service/updates")} className='text-black bg-white text-lg font-medium px-4 py-1 rounded'>Update</button>
      <hr className='mt-10'/>
      <Outlet />
    </div>
    
  )
}

export default Service