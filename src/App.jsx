import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import { productsAPI } from './API/productsAPI'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import ProductDetails from './components/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'

const Layout = ()=>{
    return (
      <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
    )
  }

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    // barent routes
    <Route>
      {/* layout routes */}
      <Route to='/' element={<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
<Route path="contact" element={<Contact />} />

      </Route>

    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App