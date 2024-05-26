import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../Redux/todoSlice'

function TodoContainer() {
    const [isOnly,setIsOnly] = useState(true)
    const items = useSelector((state) => {
        return state.todo
    })

    const dispatch = useDispatch();

    const handleDelete = (e) => {
        dispatch(deleteTodo(e))
    }

    const handleUpdate = () => {
        setIsOnly((prev) => !prev)
    }

    return (
        <div className='flex justify-center'>
            <ul className='text-white'>
                {items.map((item) => {
                    return (
                        <div className='flex'>
                            <li key={item.id} contentEditable={isOnly} className='outline-none'>
                                {item.task}
                            </li>
                            <button
                            onClick={handleUpdate}
                            >🔂</button>
                            <button 
                            onClick={() => {
                                handleDelete(item.id)
                            }}
                            >❌</button>
                        </div>

                    )
                })}
            </ul>
        </div>
    )
}

export default TodoContainer
