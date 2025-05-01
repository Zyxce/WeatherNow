// themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getThemeByTime } from '../utils/themeUtils'

interface ThemeState {
  theme: 'dark' | 'light'
  isAutoTheme: boolean
}

const initialState: ThemeState = {
  theme: 'dark',
  isAutoTheme: true,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
      state.isAutoTheme = false
    },
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload
      state.isAutoTheme = false
    },
    setAutoTheme: (state) => {
      state.isAutoTheme = true
      state.theme = getThemeByTime()
    },
  },
})

export const { toggleTheme, setTheme, setAutoTheme } = themeSlice.actions
export default themeSlice.reducer
