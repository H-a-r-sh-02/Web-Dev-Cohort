import React from 'react'
import RecipeCard from '../components/RecipeCard'

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem('fav') || []);

  const renderRecipe = favourite.map(recipe=>
    <RecipeCard key={recipe.id} recipe={recipe} />
  );
  return (
    <div className='flex flex-wrap gap-6 pt-8'>
     {favourite.length > 0 ? renderRecipe : "No Favourite Found!"}
      </div>
  )
}

export default Fav  