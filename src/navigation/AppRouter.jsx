import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import RootLayout from '../layout/RootLayout'
import Home from '../pages/Home/P_Home'
import About from '../pages/About/P_About'
import Error from '../components/Error/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

function AppRouter() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}

export default AppRouter
