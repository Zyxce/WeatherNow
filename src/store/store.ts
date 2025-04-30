import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import languageReducer from './languageSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
