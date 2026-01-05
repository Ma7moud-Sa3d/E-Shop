import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { setProduct } = cartSlice.actions

export default cartSlice.reducer