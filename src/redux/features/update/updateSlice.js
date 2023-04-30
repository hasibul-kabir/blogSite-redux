import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import updateBlog from "./updateBlog";

const initialState = {
    likes: 0,
    isSaved: false,
    isLoading: false,
    fulfilled: {},
    isError: false
}

// async thunk
export const setToServer = createAsyncThunk('update/server', async ({ id, newlikes, newIsSaved }) => {
    const updatedBlog = await updateBlog({ id, newlikes, newIsSaved });
    return updatedBlog;
});

const updateSlice = createSlice({
    name: "update",
    initialState,
    reducers: {
        like: (state, action) => {
            state.likes = action.payload + 1
        },
        save: (state, action) => {
            state.isSaved = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setToServer.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(setToServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.fulfilled = action.payload
            })
            .addCase(setToServer.rejected, (state) => {
                state.isLoading = false
                state.isError = true
                state.fulfilled = {}
            })
    }
})

export default updateSlice.reducer;
export const { like, save } = updateSlice.actions;