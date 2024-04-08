import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = "http://localhost:5000";

const initialState = {
  loading: false,
  groups: [] ,
}

export const getGroups = createAsyncThunk(
  'getGroups',
  async()=>{
    const response = await axios.get(`${host}/api/group/allgroups`, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlZGI2OTFkOWQ0NGExN2M0OTFjYjZlIn0sImlhdCI6MTcxMDA3NzU4NX0.xU1maoGnMzzykEQw71Kiv0I74Qg8Kjpe1EkfhYa7n44",
      },
    });
    // console.log(response);
    return response
  }
  );

  // export const getGroup = createAsyncThunk(
  //   'getGroup',
  //   async() =>{
  //     const response = await axios.
  //   }
  // )
  
  export const createGroup = createAsyncThunk(
    'createGroup',
    async(data)=>{
      const response = await axios.post(`${host}/api/group/creategroup`,{
        title: data.title,
        members: data.members
      },{
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlZGI2NmFkOWQ0NGExN2M0OTFjYjY4In0sImlhdCI6MTcxMDA3NzU0Nn0.5qm0WgrbnFqhQM7oJJ1edD44sdFj4tQAmByAsyBdXag",
        }
      })
      console.log(response);
    return response;
  }
)
export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  
  extraReducers: (builder)=>{
      builder.addCase(getGroups.fulfilled, (state,action)=>{
        state.groups= action.payload.data;
      }),
      builder.addCase(getGroups.pending, (state)=>{
        state.loading = true;
      }),
      builder.addCase(createGroup.fulfilled, (state,action)=>{
        state.groups.push(action.payload.data)
      }),
      builder.addCase(createGroup.pending, (state)=>{
        state.loading = true;
      })
    }
});


export default groupSlice.reducer;
