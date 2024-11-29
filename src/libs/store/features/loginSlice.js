import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsLoginOpen: (state, action) => {
      state.value = action.payload;
    },
  },
})


export const { setIsLoginOpen } = loginSlice.actions

export default loginSlice.reducer