import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
]

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push({
                id: nanoid(),
                task: action.payload,
                status: false
            })
        },
        deleteTodo(state, action) {
            return state = state.filter((item) => {
                return item.id !== action.payload;
            })
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer