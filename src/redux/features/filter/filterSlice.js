import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filterBy: "all"
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filter: (state, action) => {
            state.filterBy = action.payload
        }
    }
});

export default filterSlice.reducer;
export const { filter } = filterSlice.actions;