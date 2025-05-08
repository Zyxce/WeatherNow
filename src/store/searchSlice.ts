import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  city: string
}

const initialState: SearchState = {
  city: 'Moscow',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
  },
})

export const { setSearch } = searchSlice.actions
export default searchSlice.reducer
