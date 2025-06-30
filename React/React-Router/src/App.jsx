import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import About from './components/About'
import Service from './components/Service'
import Nav from './components/Nav'


const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  )
}

export default App