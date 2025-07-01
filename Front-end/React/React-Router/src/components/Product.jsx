// import React from 'react'

import { useNavigate } from "react-router-dom"

const Product = () => {
  const navigate = useNavigate();

  const navigateHandler = (name)=>{
    navigate(`/product/details/${name}`);
  }

  return (
    <div className='mt-9'>
      <h1 className='text-5xl font-thin'>Products</h1>
      <div>
        <h2 className='text-3xl font-thin mt-8 '>Product 1</h2>
        <button onClick={()=> navigateHandler("Product-1")} className='px-4 py-2 bg-white text-black text-lg font-medium rounded mt-5'>See Details</button>
      </div>
         <div>
        <h2 className='text-3xl font-thin mt-8 '>Product 2</h2>
        <button onClick={()=> navigateHandler("Product-2")} className='px-4 py-2 bg-white text-black text-lg font-medium rounded mt-5'>See Details</button>
      </div>
         <div>
        <h2 className='text-3xl font-thin mt-8 '>Product 3</h2>
        <button onClick={()=> navigateHandler("Product-3")} className='px-4 py-2 bg-white text-black text-lg font-medium rounded mt-5'>See Details</button>
      </div>
    </div>
  )
}

export default Product