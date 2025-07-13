import React, { Fragment, useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard';

const Recipe = () => {
  const {data} = useContext(recipeContext);

  const renderRecipe = data.map(recipe=>
    <RecipeCard key={recipe.id} recipe={recipe} />
  );
  return (
    <div className='flex flex-wrap gap-6 pt-8'>
     {data.length > 0 ? renderRecipe : "No Recipes Found!"}
      </div>
  )
}

export default Recipe