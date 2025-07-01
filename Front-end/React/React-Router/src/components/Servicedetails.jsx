import React from 'react'
import { useNavigate } from 'react-router-dom'

const Servicedetails = () => {
    const navigate = useNavigate();
    
  return (
    <div className='p-10'>
        <h1 className='text-5xl font-thin mb-8'>Service Details..</h1>
        <button onClick={()=>navigate(-1)} className='bg-white text-black text-lg font-medium px-4 py-1 rounded'>Back</button>
    </div>
  )
}

export default Servicedetails