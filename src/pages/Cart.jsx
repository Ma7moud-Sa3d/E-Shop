import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems, decrementItem, deleteItem, incrementItem } from '../redux/cartSlice'

const Cart = () => {
  const products = useSelector(state => state.cart.products)
  const dispach = useDispatch()
  const cart = useSelector(state => state.cart)

  return (
    <div className="bg-gray-100 min-h-screen px-4 md:px-12 lg:px-24 py-10">
      
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">

        {/* ================= Products Section ================= */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6">

          {/* Header */}
          <div className="hidden md:flex justify-between border-b pb-3 font-semibold text-gray-600">
            <p className="w-1/2">Product</p>
            <div className="flex w-1/2 justify-between">
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
              <p>Remove</p>
            </div>
          </div>

          {/* Products */}
          <ul className="flex flex-col gap-4 mt-4">
            {products.map(product => (
              <li
                key={product.id}
                className="flex flex-col md:flex-row justify-between items-center border rounded-lg p-4 hover:shadow-lg transition"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-20 w-20 object-contain"
                  />
                  <h2 className="font-semibold text-gray-700">
                    {product.title}
                  </h2>
                </div>

                {/* Product Actions */}
                <div className="flex items-center justify-between md:w-1/2 gap-6 mt-4 md:mt-0">
                  <p className="font-medium">${product.price}</p>

                  {/* Quantity */}
                  <div className="flex items-center gap-2 border rounded">
                    <button className="px-3 py-1 hover:bg-red-500 hover:text-white transition"
                    onClick={()=> dispach(decrementItem(product.id))}>
                      -
                    </button>
                    <span className="font-bold px-2">
                      {product.quantity}
                    </span>
                    <button className="px-3 py-1 hover:bg-green-500 hover:text-white transition"
                    onClick={()=> dispach(incrementItem(product.id))}>
                      +
                    </button>
                  </div>

                  <p className="font-semibold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>

                  <FaTrash className="text-red-500 cursor-pointer hover:scale-110 transition" 
                  onClick={()=> dispach(deleteItem(product.id))}/>
                </div>
              </li>
            ))}
            {
              products.length > 1 ?
              <button className='text-lg text-white bg-red-600 mx-60 rounded-xl py-2 cursor-pointer hover:bg-red-900 duration-500'
              onClick={()=> dispach(clearItems())}>Clear Products</button> : <></> 
            }
          </ul>
        </div>

        {/* ================= Cart Summary ================= */}
        <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-6 h-fit">

          <h2 className="text-xl font-bold border-b pb-4 mb-4">
            Cart Totals
          </h2>

          <div className="flex justify-between mb-3 text-gray-600">
            <span>Total Items</span>
            {/* <span>{products.length}</span> */}
            <span>{cart.totalQuantity}</span>
          </div>

          <div className="mb-4 text-gray-600">
            <p className="font-medium">Shipping</p>
            <p className="text-sm">
              Shipping to <span className="font-semibold">123 Default St, DC</span>
            </p>
            <button className="text-blue-500 text-sm hover:underline mt-1">
              Change Address
            </button>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Total Price</span>
            <span>$ {cart.totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  )
}

export default Cart
