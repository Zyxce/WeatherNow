import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LanguageState {
  language: 'en' | 'ru'
}

const initialState: LanguageState = {
  language: 'en',
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'en' ? 'ru' : 'en'
    },
    setLanguage: (state, action: PayloadAction<'en' | 'ru'>) => {
      state.language = action.payload
    },
  },
})

export const { toggleLanguage, setLanguage } = languageSlice.actions
export default languageSlice.reducer
