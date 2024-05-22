import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkTheme: true
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme
        }
    }
})

export default appSlice.reducer
export const {toggleTheme} = appSlice.actions