import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import RootLayout from './RootLayout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Error from '../pages/Error/Error'
import Accomodation from '../pages/Accomodation/Accomodation'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/accomodation/:id"
        element={<Accomodation />}
        errorElement={<Error />}
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

function AppRouter() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}

export default AppRouter
