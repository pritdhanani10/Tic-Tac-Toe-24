import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{username:"",
        id:"",
        email:"",

        username:"",
        
    },
    reducers:{
        storeUser:(state,action)=>{
            state.id=action.payload.id;
            state.email=action.payload.email;
          
            state.username=action.payload.username;
        
            
        },
        deleteUser:(state)=>{
            state.id=null;
            state.email=null;
     
            state.username=null;
            
        }
    }
})

export const userActions=userSlice.actions;

export default userSlice;