import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'

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