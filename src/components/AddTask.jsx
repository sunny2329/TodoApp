import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todoSlice';

export default function AddTask() {
    const [task,setTask] = useState("");
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addTodo(task));
        setTask("");
    }
   

  return (
    <div className='bg-green-500 px-4 py-5 flex justify-center'>
      <input type="text" placeholder='Enter Your Task' className='px-2 py-1 mr-2 rounded-md'
      value={task}
      onChange={(e)=>{
        setTask(e.target.value)
      }}
      />
      <button
      onClick={handleAdd}
      >Add</button>
    </div>
  )
}
