import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getComments = createAsyncThunk(
  'comments/getCommetns', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    return response.data;
    });

export const postsComments = createAsyncThunk(
  'comments/createCommetns', async ({comment, postId}) => {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/post/${postId}/comments`, {body : comment});
    return response.data;
    });

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    value: 0,
    loading: false,
    comments: [],
    comment: null,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.loading = false;
        state.comments = [];
        state.error = action.error.message;
      });
  },
})

// Action creators are generated for each case reducer function
// export const { } = commentsSlice.actions

export default commentsSlice.reducer