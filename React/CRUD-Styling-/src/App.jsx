import { nanoid } from 'nanoid'
import {useState} from 'react';
import Create from './components/Create'
import Read from './components/Read'

const App = () => {

  const [todo, settodo] = useState([{
    id: nanoid(), title: "kaam krle", isCompleted: false,
  }]);
  
  const [title, settitle] = useState("");

 
 
 const renderTodo = todo.map((todo)=>{
  return <li key={todo.id}>{todo.title}</li>
 })
  return (
    <div className='w-screen h-screen flex justify-between py-10 px-25'>
   <Create title={title} settitle={settitle} nanoid={nanoid} todo={todo} settodo={settodo} />
   <Read todo={todo} settodo={settodo}/>
    </div>
  )
}

export default App