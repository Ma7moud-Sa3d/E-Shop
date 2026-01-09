import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-12">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Contact Us
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4">
              Have questions or need help? We’d love to hear from you.
            </p>

            <ul className="text-gray-700 space-y-3">
              <li><strong>Email:</strong> mahmoud.saad.tech1@gmail.com</li>
              <li><strong>Phone:</strong> +201152053617</li>
              <li><strong>Address:</strong> Giza, Egypt</li>
            </ul>
            
            <div className='flex mt-4 gap-5 text-3xl'>
              <a href="https://www.linkedin.com/in/mahmoud-saad8" target='_blank'>
              <FaLinkedin className='text-blue-600 cursor-pointer' />
              </a>
              <a href="https://github.com/Ma7moud-Sa3d" target='_blank'>
              <FaGithub className='cursor-pointer'/>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border px-4 py-2 rounded"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border px-4 py-2 rounded"
            />

            <button
              type="submit"
              className="bg-black text-white py-2 rounded hover:bg-gray-800 cursor-pointer transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Contact
