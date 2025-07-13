import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import Create from './pages/Create'

const App = () => {
  return (
    <div className='w-full h-screen bg-[url(https://plus.unsplash.com/premium_photo-1693266636037-a8fdc067a6b3?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center text-white px-30 '>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App