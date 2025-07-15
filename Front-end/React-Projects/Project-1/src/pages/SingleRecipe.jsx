import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipeContext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const navigate = useNavigate();
  
  const {data, setdata} = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id); 
    const { register, handleSubmit } = useForm({defaultValues: {
      title: recipe.title,
      image: recipe.image,
      description: recipe.description,
      ingredient: recipe.ingredients,
      instruction: recipe.instructions,
      category: recipe.category,

    }});
    
  const submitHandler = (recipe)=>{
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    toast.success("Recipe Updated !");  
    }


  const deleteHandler = ()=> {
    const filterData = data.filter(r => r.id != params.id);
    setdata(filterData);
    toast.success("Recipe Deleted!");
    navigate('/create-recipe');
    
  }
  const recipeIngr = recipe.ingredients.forEach((ingr)=>{
    <li>{ingr}</li>
  })

  console.log(data)
  return recipe ? (<div className='mt-5 flex break-words'>
    <div className='left w-1/2 text-slate-100 drop-shadow-md'> 
    <h1 className='text-4xl font-semibold mb-4'>{recipe.title}</h1>    
    <img className='h-[28vh] rounded-xl mb-3' src={recipe.image} alt="" />
    <h2 className='text-2xl font-normal tracking-tight leading-7 mb-3 '>{recipe.description}</h2>
     <ul className="list-disc list-inside">
      {recipe.ingredients.map((item, index) => (
        <li className='text-xl' key={index}>{item}</li>
       ))}
     </ul>
    </div>
    <div className='right w-1/2  flex flex-col items-center'>
      <h2 className='mb-3 text-4xl font-thin text-center'>Update Recipe</h2>
       <form onSubmit={handleSubmit(submitHandler)} className='w-1/2 px-10 py-2 rounded bg-green/30 backdrop-blur-md'>

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
      <div className='flex gap-5'>
      <button className='mt-4 block px-4 py-2 bg-black text-white font-medium rounded'>Update</button>
      <button onClick={deleteHandler} className='mt-4 block px-4 py-2 bg-black text-white font-medium rounded'>Delete</button>
      </div>
    </form>
    </div>
  </div>) : ("Loading...");
}


export default SingleRecipe