import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getRelatedBlogs from "./getRelatedBlogs"

const initialState = {
    relatedBlogs: [],
    isLoading: false,
    isError: false,
    error: ''
}

//async thunk
export const fetchRelatedBlogs = createAsyncThunk('relatedBlogs/fetchRelatedBlogs', async ({ tags, id }) => {
    const relatedBlogs = await getRelatedBlogs({ tags, id });

    return relatedBlogs;
});

const relatedBlogsSlice = createSlice({
    name: 'relatedBlogs',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedBlogs.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.relatedBlogs = action.payload
                state.isError = false
            })
            .addCase(fetchRelatedBlogs.rejected, (state, action) => {
                state.isLoading = false
                state.relatedBlogs = []
                state.isError = true
                state.error = action.error.message
            })
    }

})

export default relatedBlogsSlice.reducer;