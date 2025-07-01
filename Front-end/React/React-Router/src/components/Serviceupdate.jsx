import React from 'react'
import { useNavigate } from 'react-router-dom'

const Serviceupdate = () => {
    const navigate = useNavigate();

  return (
    <div className='p-10 mt-10'>
        <h1 className='text-5xl font-thin'>Service Updates..</h1>
        <button onClick={()=>navigate('/about')} className='text-black bg-white font-medium px-4 py-1 rounded mt-8'>Update</button>
        <button onClick={()=>navigate(-1)} className='text-black bg-white font-medium px-4 py-1 rounded ml-4'>Services</button>
    </div>
  )
}

export default Serviceupdate