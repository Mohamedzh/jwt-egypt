import { configureStore } from '@reduxjs/toolkit'
import positionReducer from './positionSlice'
import careerReducer from './careerSlice'

export const store = configureStore({
  reducer: {
    position: positionReducer,
    career: careerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
