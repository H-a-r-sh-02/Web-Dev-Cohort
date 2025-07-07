import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'

const Recipe = () => {
  const {data} = useContext(recipeContext);

  const renderRecipe = data.map(recipe=><div key={recipe.id}><h1>{recipe.title}</h1></div>);
  return (
    <div>
      {renderRecipe}
      </div>
  )
}

export default Recipe