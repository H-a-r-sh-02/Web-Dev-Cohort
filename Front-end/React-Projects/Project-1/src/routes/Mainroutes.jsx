import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import About from '../pages/About'
import Create from '../pages/Create'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipe />} />
        <Route path='/about' element={<About />} />
        <Route path='/create-recipe' element={<Create />} />
    </Routes>
  )
}

export default Mainroutes