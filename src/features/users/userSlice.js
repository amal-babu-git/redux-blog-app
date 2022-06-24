import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', name: 'Amal Babu' },
    { id: '2', name: 'Lucy Invisible' },
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer