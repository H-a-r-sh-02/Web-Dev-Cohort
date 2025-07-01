import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'


const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white px-[10%] py-8'>
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App