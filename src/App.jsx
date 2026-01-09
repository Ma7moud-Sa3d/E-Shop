import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import { productsAPI } from './API/productsAPI'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

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
        <Route index element={<Home loader={productsAPI}/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
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