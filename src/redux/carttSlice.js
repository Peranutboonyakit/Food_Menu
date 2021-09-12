import { createSlice } from '@reduxjs/toolkit'

const carttSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        orderNow: (state, action) => {

            state.push(action.payload);
        }
    }
});

export const { orderNow } = carttSlice.actions

export default carttSlice.reducer

