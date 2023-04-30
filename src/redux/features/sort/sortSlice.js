import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortKey: "default"
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        sortBy: (state, action) => {
            state.sortKey = action.payload
        }
    }
})

export default sortSlice.reducer;
export const { sortBy } = sortSlice.actions;