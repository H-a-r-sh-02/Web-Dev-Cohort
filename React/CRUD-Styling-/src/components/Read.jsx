// import style from './Read.module.css';
import { toast } from 'react-toastify';

const Read = (props) => {
    const todos= props.todo;
    const settodo = props.settodo;

    const deleteHandler = (id)=>{
      const filteredTodo = todos.filter((todo)=> todo.id != id);
      settodo(filteredTodo);
      toast.error("Todo Deleted!");
    }

     const renderTodo = todos.map((todo)=>{
  return <li className='bg-gray-900 rounded text-xl px-5 py-2 flex justify-between mb-2' key={todo.id}>
              <span>{todo.title}</span>
              <button onClick={()=> deleteHandler(todo.id)} 
                className='text-sm border px-3 py-1 rounded-xl'> Delete</button>
              </li>
 });


  return (
    <div className='px-10 py-5'>
    <h1 className='text-5xl font-thin mb-5'><span className='text-pink-400'>Pending</span> Todos...</h1>
    <br />
    <ol>{renderTodo}</ol>
    </div>
  )
}

export default Read