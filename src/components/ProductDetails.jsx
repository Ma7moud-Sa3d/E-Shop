import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        )
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading product details...
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <span className="uppercase text-sm font-semibold text-gray-500">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold mt-2 mb-4">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.round(product.rating.rate)
                    ? 'text-amber-400'
                    : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <p className="text-3xl font-semibold mb-6">
            ${product.price}
          </p>

          <button
            onClick={() =>
              dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
              }))
            }
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
