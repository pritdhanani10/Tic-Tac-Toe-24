import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: { tokenValue: "", istoken: false },
  reducers: {
    storeToken: (state,action) => {
      localStorage.setItem("token",action.payload);
      state.tokenValue=action.payload;
      state.istoken=true;
      
    },

    deleteToken:(state)=>{
        localStorage.removeItem("token");
        state.tokenValue=null;
        state.istoken=false;

    },
    // validToken:(state)=>{

    // }
  },
});

export const tokenAction = tokenSlice.actions;

export default tokenSlice;
