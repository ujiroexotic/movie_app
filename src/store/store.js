import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice'

export const store = configureStore({
    reducer: {
        // This key name appear on redux dev-tools
        home: homeSlice,
    },
})