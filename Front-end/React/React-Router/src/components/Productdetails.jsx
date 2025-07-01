import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Productdetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    // console.log(params);
  return (
    <div className='px-[10%] mt-10'>
        <h1 className='text-4xl font-thin'>{params.name}</h1>
        <h2 className='text-3xl font-thin mt-8'>Product Details...</h2>
        <button onClick={() => navigate(-1)} className='text-lg font-medium text-black bg-white px-4 py-2 rounded mt-8'>Back</button>
    </div>
  )
}

export default Productdetails