import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name : "user",
    initialState : [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.pop(action.payload)
        },
        deleteUsers(state, action){
           return []
        },
    },

});


console.log(UserSlice.actions)
export default UserSlice;
export const {addUser,removeUser,deleteUsers} = UserSlice.actions