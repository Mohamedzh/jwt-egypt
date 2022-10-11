import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = 0

export const positionSlice = createSlice({
    name: 'position',
    initialState,
    reducers: {
        getPosition: (state, action: PayloadAction<number>) => {
            return action.payload
        }
    },
})

export const { getPosition } = positionSlice.actions
export default positionSlice.reducer