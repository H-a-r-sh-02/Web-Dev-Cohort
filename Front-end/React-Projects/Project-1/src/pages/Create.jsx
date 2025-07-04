import React from 'react'
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"

const Create = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data)=>{
    console.log(data);
    data.id = nanoid();
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className='w-[45%] h-[75%] px-10 py-2 mt-8 mx-66 rounded bg-slate-800'>
      <h2 className='mb-4 text-2xl font-thin text-center'>Create Recipe</h2>
      <input className='block border-b outline-0 p-2' type='url' {...register("image")} placeholder='Enter Image URL' />
      <small className='text-red-400'>This is how error is shown</small>

      <input className='block border-b outline-0 p-2' {...register("title")} type='text' placeholder='Recipe Title' />

      <textarea className='block border-b outline-0 p-2' {...register("description")} placeholder='//Write description of the recipe..'></textarea>
      
      <textarea className='block border-b outline-0 p-2' {...register("ingredient")} placeholder='//Write ingredients here separately'></textarea>

      <textarea className='block border-b outline-0 p-2' {...register("instruction")} placeholder='//Write instructions in points'></textarea>
      
      <select className='mt-3'>
        <option value="cat-1">Category-1</option>
        <option value="cat-2">Category-2</option>
        <option value="cat-3">Category-3</option>
      </select>

      <button className='mt-4 block px-4 py-2 bg-black text-white font-medium rounded'>Create</button>

    </form>
  )
}

export default Create