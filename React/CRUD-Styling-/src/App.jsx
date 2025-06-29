import Create from './components/Create'
import Read from './components/Read'

const App = () => {
  return (
    <div className='w-screen h-screen flex justify-between py-10 px-25'>
   <Create />
   <Read />
    </div>
  );
};

export default App