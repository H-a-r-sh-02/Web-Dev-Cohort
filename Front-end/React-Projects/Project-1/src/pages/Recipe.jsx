import React, { Fragment, useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'

const Recipe = () => {
  const {data} = useContext(recipeContext);

  const renderRecipe = data.map(recipe=><div key={recipe.id} className='h-[20vw] w-[15vw] rounded-2xl flex flex-col items-center justify-around bg-green-400/20 backdrop-blur-md'>
    <img className="bg-green-300 h-20 w-20 rounded-full " src= "${recipe.image}" alt="" />
    <h1>{recipe.title}</h1>
    </div>);
  return (
    <div className='flex gap-10 pt-8'>
     {renderRecipe}
      </div>
  )
}

export default Recipe