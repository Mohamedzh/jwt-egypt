import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CareerState {
  career: string
}

const initialState: CareerState = {
  career: '',
}

export const careerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {
    getCareer: (state, action: PayloadAction<string>) => {
      state.career = action.payload
    },
  },
})

export const { getCareer } = careerSlice.actions
export default careerSlice.reducer
