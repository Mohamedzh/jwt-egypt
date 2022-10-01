import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ThemeType } from '../../types '


const initialState = {}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        getTheme: (state, action: PayloadAction<ThemeType>) => {
            return action.payload
        }
    },
})

export const { getTheme } = themeSlice.actions
export default themeSlice.reducer