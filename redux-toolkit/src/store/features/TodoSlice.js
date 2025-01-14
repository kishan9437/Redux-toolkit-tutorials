import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
            console.log('Action ', action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        clearTodos: (state, action) => {
            state.todos = []
        }
    }
})

console.log("Action : ", TodoSlice.initialState)

export const { addTodo, deleteTodo, clearTodos } = TodoSlice.actions;
export default TodoSlice.reducer;