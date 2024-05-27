import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, setStatus } from '../Redux/todoSlice';

function TodoContainer() {
    const [isEditing, setIsEditing] = useState(null);
    const [editTask, setEditTask] = useState("");
    const category = useSelector((state) => state.todo.category);
    console.log(typeof category);
    const items = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEdit = (item) => {
        setIsEditing(item.id);
        setEditTask(item.task);
    };

    const handleUpdate = () => {
        if (editTask.trim()) {
            dispatch(updateTodo({
                id: isEditing,
                task: editTask
            }));
        }
        setIsEditing(null);
        setEditTask("");
    };

    const completedTodo = items
        .filter((todo) => todo.status === true)
        .map((item) => {
            return <div className='flex' key={item.id}>
                <input type="checkbox" name="" id="" value={item.status} onChange={(e) => {
                    // console.log(e.target.checked);
                    dispatch(setStatus({
                        id: item.id,
                        status: e.target.checked
                    }))

                }} />
                {isEditing === item.id ? (
                    <input
                        type="text"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                        className='text-black outline-none'
                    />
                ) : (
                    <li
                        onClick={() => handleEdit(item)}
                        className={`cursor-pointer ${item.status ? 'line-through' : ''}`}
                    >
                        {item.task}
                    </li>
                )}
                {isEditing === item.id && (
                    <button onClick={handleUpdate} className='ml-2'>💾</button>
                )}
                <button onClick={() => handleDelete(item.id)} className='ml-2'>❌</button>
            </div>
        })

    const uncompleteTodo = items
        .filter((todo) => todo.status === false)
        .map((item) => {
            return <div className='flex' key={item.id}>
                <input type="checkbox" name="" id=""  onChange={(e) => {
                    // console.log(e.target.checked);
                    dispatch(setStatus({
                        id: item.id,
                        status: e.target.checked
                    }))
                }} />
                {isEditing === item.id ? (
                    <input
                        type="text"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                        className='text-black outline-none'
                    />
                ) : (
                    <li
                        onClick={() => handleEdit(item)}
                        className={`cursor-pointer ${item.status ? 'line-through' : ''}`}
                    >
                        {item.task}
                    </li>
                )}
                {isEditing === item.id && (
                    <button onClick={handleUpdate} className='ml-2'>💾</button>
                )}
                <button onClick={() => handleDelete(item.id)} className='ml-2'>❌</button>
            </div>
        })

    const allTodo = items.map((item) => (
        <div className='flex' key={item.id}>
            <input type="checkbox" name="" id="" value={item.status} onChange={(e) => {
                // console.log(e.target.checked);
                dispatch(setStatus({
                    id: item.id,
                    status: e.target.checked
                }))
            }} />
            {isEditing === item.id ? (
                <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className='text-black outline-none'
                />
            ) : (
                <li
                    onClick={() => handleEdit(item)}
                    className={`cursor-pointer ${item.status ? 'line-through' : ''}`}
                >
                    {item.task}
                </li>
            )}
            {isEditing === item.id && (
                <button onClick={handleUpdate} className='ml-2'>💾</button>
            )}
            <button onClick={() => handleDelete(item.id)} className='ml-2'>❌</button>
        </div>
    ))

    return (
        <div className='flex justify-center'>
            <ul className='text-white'>
                {
                    category === 'Completed' ? completedTodo
                        : category === 'Not Completed' ? uncompleteTodo
                            : allTodo
                }
            </ul>
        </div>
    );
}

export default TodoContainer;
