import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import Create from './pages/Create'

const App = () => {
  return (
    <div className='w-full h-screen bg-gray-900 text-white px-[15%] '>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App