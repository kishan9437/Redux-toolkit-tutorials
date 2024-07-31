import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{},
        deleteTodo:(state,action)=>{},
        clearTodos:(state,action)=>{}
    }
})

console.log("Action : ",TodoSlice)

export default TodoSlice.reducer;