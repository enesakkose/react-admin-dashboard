import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = auth.actions
export default auth.reducer


//todo you continue from 14.53 dk at tomorrow