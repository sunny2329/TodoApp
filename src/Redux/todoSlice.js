import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    category: "All",
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: nanoid(),
                task: action.payload,
                status: false
            })
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter((item) => {
                return item.id !== action.payload;
            })
        },
        updateTodo(state, action) {
            const { id, task } = action.payload;
            const existingTask = state.todos.find((item) => item.id === id)
            if (existingTask) {
                existingTask.task = task;
            }
        },
        setCategory(state,action){
            state.category = action.payload;
        },
        setStatus(state,action){
            const {id, status} = action.payload;
            const existingTask = state.todos.find((item) => item.id === id);
            existingTask.status = status;
        }
    }
})

export const { addTodo, deleteTodo, updateTodo , setCategory, setStatus} = todoSlice.actions;
export default todoSlice.reducer