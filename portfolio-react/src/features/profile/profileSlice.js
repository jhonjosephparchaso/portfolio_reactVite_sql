import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
    const response = await fetch('http://localhost:5000/api/profile')
    const data = await response.json()
    return data.data
})

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProfile.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchProfile.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchProfile.rejected, (state) => {
            state.loading = false
            state.error = 'Failed to load profile'
        })
    }
})

export default profileSlice.reducer