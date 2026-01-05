import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action) =>{
      state.products = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProduct } = productSlice.actions

export default productSlice.reducer