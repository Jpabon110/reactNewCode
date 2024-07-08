import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const url = "https://jsonplaceholder.typicode.com/posts"

// First, create the thunk
// const getComments = createAsyncThunk(
//   'comments/getCommetns',
//   async () => {
//     try {
//       const response = await userAPI.fetchById(userId)
//       return response.data
//     } catch (error) {
//       console.log("error getComments", error);
//     }
//   },
// )

const getComments = createAsyncThunk(
  'comments/getCommetns', () => {
    return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
    });

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: true,
    comments: [],
  },
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    extraReducers: (builder) => {
      builder.addcases
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer