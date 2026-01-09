import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions)=>{
      const newItem = actions.payload;
      const item = state.products.find(item => item.id == newItem.id)
      if (item) {
        item.quantity += newItem.quantity
        item.totalPrice += newItem.price
      } else {
        state.products.push(newItem)
      }
      state.totalPrice += newItem.price ;
      state.totalQuantity++ ;
      
    },

    incrementItem: (state, action)=> {
        const item = state.products.find((item)=> item.id === action.payload)
        item.quantity++;
      state.totalQuantity++ ;
      state.totalPrice += item.price ;


    },

    decrementItem: (state, action)=> {
        const item = state.products.find((item)=> item.id === action.payload)
        if (item.quantity === 1) {
          item.quantity = 1
        } else {
          item.quantity--;
      state.totalQuantity-- ;
      state.totalPrice -= item.price ;

        }
    },

    // ✅ UPDATED
    deleteItem: (state, action) => {
      const item = state.products.find(item => item.id === action.payload)
      if (!item) return

      state.totalQuantity -= item.quantity
      state.totalPrice -= item.price * item.quantity

      state.products = state.products.filter(
        item => item.id !== action.payload
      )
    },

    // ✅ UPDATED
    clearItems: (state) => {
      state.products = []
      state.totalQuantity = 0
      state.totalPrice = 0
    }


  },
})

// Action creators are generated for each case reducer function
export const { addToCart, incrementItem, decrementItem, deleteItem, clearItems } = cartSlice.actions

export default cartSlice.reducer