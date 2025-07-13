import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { recipeContext } from '../context/RecipeContext';

const SingleRecipe = () => {
  const { data } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);


  const submitHandler = (recipe)=>{
    recipe.id = nanoid();
    setdata([...data, recipe]);
    toast.success("Recipe Created !");
    reset();
    navigate('/recipes');
  }
  return recipe ? (<div className='mt-10'>
    <div className='left w-1/2'> 
    <h1 className='text-5xl font-semibold mb-5'>{recipe.title}</h1>    
    <img className='h-[30vh]' src={recipe.image} alt="" />
    </div>
    <div className='right w-1/2'>
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
    </div>
  </div>) : ("Loading...");
  
}


export default SingleRecipe