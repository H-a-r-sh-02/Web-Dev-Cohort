import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { recipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const {data, setdata} = useContext(recipeContext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe)=>{
    recipe.id = nanoid();
    setdata([...data, recipe]);
    toast.success("Recipe Created !");
    reset();
    navigate('/recipes');
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className='w-[35%] h-[75%] px-20 py-2 mt-8 mx-66 rounded bg-green/30 backdrop-blur-md'>
      <h2 className='mb-4 text-3xl font-thin text-center'>Create Recipe</h2>

      <input className='block border-b outline-0 p-2' type='url' {...register("image")} placeholder='Enter Image URL' />
      {/* <small className='text-red-400'>This is how error is shown</small> */}

      <input className='block border-b outline-0 p-2' {...register("title")} type='text' placeholder='Recipe Title' />

      <textarea className='block border-b outline-0 p-2' {...register("description")} placeholder='//Write description of the recipe..'></textarea>
      
      <textarea className='block border-b outline-0 p-2' {...register("ingr")} placeholder='//Write ingredients here separately'></textarea>

      <textarea className='block border-b outline-0 p-2' {...register("instr")} placeholder='//Write instructions in points'></textarea>
      
      <select className='block border-b outline-0 p-2 mt-3 bg-black' {...register("category")}>
        <option value="breakfast">BreakFast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className='mt-4 block px-4 py-2 bg-black text-white font-medium rounded'>Create</button>

    </form>
  )
}

export default Create