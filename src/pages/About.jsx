import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-12">

        <h1 className="text-4xl font-bold mb-6 text-center">
          About Us
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <span className="font-semibold">E-SHOP</span>, your
            trusted online store for quality products and great deals.
            We are passionate about delivering the best shopping experience
            with carefully selected items and fast delivery.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our mission is to make online shopping simple, enjoyable,
            and accessible for everyone. We believe in transparency,
            quality, and customer satisfaction.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Thank you for choosing E-SHOP. We’re always happy to serve you.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="border rounded-lg p-4 hover:bg-red-400 hover:scale-105 hover:text-white duration-500 cursor-pointer">
              <h3 className="text-xl font-bold mb-2 ">10K+</h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>
            <div className="border rounded-lg p-4 hover:bg-green-400 hover:scale-105 hover:text-white duration-500 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">500+</h3>
              <p className="text-gray-500">Products</p>
            </div>
            <div className="border rounded-lg p-4 hover:bg-blue-400 hover:scale-105 hover:text-white duration-500 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">24/7</h3>
              <p className="text-gray-500">Support</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
