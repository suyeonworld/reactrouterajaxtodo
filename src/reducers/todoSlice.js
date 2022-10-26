import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {id : 0},
    reducers : {
        setid : (state, action) => {
            console.log(state.id)
            state.id = action.payload
        }
    }
})

export const {setid} = todoSlice.actions

export default todoSlice.reducer