import { createContext, useState } from 'react'

export const recipeContext =  createContext(null);

const RecipeContext = (props) => {
    const [data, setdata] = useState([]);
  return (
    <recipeContext.Provider value={{ data, setdata }} >
        {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext